import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const NavBar = () => {
  const { authData, logout } = useAuth();

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
          <span
            style={{
              fontSize: "2rem",
              backgroundColor: "white",
              marginRight: "2rem",
            }}
          >
            {authData.firstName ? authData.firstName : "User"}
          </span>
          <div className="fas fa-search" id="search-btn"></div>
          <div className="fas fa-moon" id="theme-btn"></div>
          {/* <div className="m1 badge-container">
						<div className="fas fa-shopping-cart"></div>
						<span className="badge right-badge sm-badge">10</span>
					</div> */}
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
