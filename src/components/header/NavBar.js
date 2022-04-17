import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { useThemeContext } from "../../context/themeContext";

const NavBar = () => {
  const { authData, logout } = useAuth();
  const { theme, toggleLightDarkTheme } = useThemeContext();

  return (
    <div>
      <header className="header">
        <Link to="/" className="logo">
          {" "}
          <i className="fab fa-canadian-maple-leaf"></i> Fresh-Tube
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

          <div
            className="fas fa-user"
            id="menu-btn"
            onClick={() => logout()}
          ></div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
