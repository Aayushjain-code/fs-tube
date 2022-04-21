import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useThemeContext } from "../../context/themeContext";

const NavBar = () => {
  const Navigate = useNavigate();
  const { authData, logout } = useAuth();
  const { theme, toggleLightDarkTheme } = useThemeContext();

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fab fa-canadian-maple-leaf"></i> Fresh Recipes Player
        </Link>

        <form action="" className="search-form">
          <input
            type="search"
            name=""
            placeholder="Search"
            id="searchBox"
          ></input>
          <label htmlFor="searchBox" className="fas fa-search"></label>
        </form>

        <div className="icons">
          <span className="userName">
            hi, {authData.firstName ? authData.firstName : "User"}
          </span>
          <div className="fas fa-search" id="search-btn"></div>
          <div
            onClick={toggleLightDarkTheme}
            className={`${theme === "light" ? "fas fa-moon" : "fas fa-sun"} `}
            id="theme-btn"
          ></div>

          {localStorage.getItem("videoToken") ? (
            <div
              className="fas  large-Nav-Icon"
              id="menu-btn"
              onClick={() => logout()}
            >
              Logout
              <i class="fas fa-user fasIcon"></i>
            </div>
          ) : (
            <div
              className="fas large-Nav-Icon"
              id="menu-btn"
              onClick={() => Navigate("/login")}
            >
              Login
              <i class="fa-solid fa-fingerprint fasIcon"></i>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default NavBar;
