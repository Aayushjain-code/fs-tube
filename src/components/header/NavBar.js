import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<div>

			<header class="header">

				<Link to="/" className='logo'> <i class="fab fa-canadian-maple-leaf"></i> Fresh-Tube</Link>

				<form action="" class="search-form">
					<input type="search" name="" placeholder="Search" id="searchBox"></input>
					<label for="searchBox" class="fas fa-search"></label>
				</form>

				<div class="icons">
					<div class="fas fa-search" id="search-btn"></div>
					{/* <div class="fas fa-moon" id="theme-btn"></div> */}

					{/* <div class="m1 badge-container">
						<div class="fas fa-shopping-cart"></div>
						<span class="badge right-badge sm-badge">10</span>
					</div> */}
					<div class="fas fa-user" id="menu-btn"></div>
				</div>



			</header>
		</div >
	)
}

export default NavBar
