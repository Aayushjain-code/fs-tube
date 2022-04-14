import { Link } from "react-router-dom";
import React from "react";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul className="m1 p1 list-non-bullet ">
        <Link to="/">
          <p className="sidebar-heading link text-decor-none">
            <i className="fa-solid fa-house"></i>Home
          </p>
        </Link>
        <Link to="/explore">
          <p className="sidebar-heading link text-decor-none">
            <i className="fa-solid fa-magnifying-glass"></i>Explore
          </p>
        </Link>
        <Link to="/playlist">
          <p className="sidebar-heading link text-decor-none">
            <i className="fa-solid fa-list"></i>Playlist
          </p>
        </Link>
        <Link to="/history">
          <p className="sidebar-heading link text-decor-none">
            <i className="fa-regular fa-clock"></i>History
          </p>
        </Link>
        <Link to="/liked">
          <p className="sidebar-heading link text-decor-none">
            <i className="fa-solid fa-thumbs-up"></i>Liked
          </p>
        </Link>

        {/* <p className="sidebar-heading ">Components</p> */}
        {/* <li className="p1"><a className="link text-decor-none" href="#typography">Typography</a></li> */}
      </ul>
    </aside>
  );
};

export default Sidebar;
