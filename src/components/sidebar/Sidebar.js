import { Link } from "react-router-dom"
import React from 'react'
import "./Sidebar.css"
const Sidebar = () => {



	return (


		<aside class="sidebar">

			<ul class="m1 p1 list-non-bullet ">

				<Link to="/">
					<p class="sidebar-heading link text-decor-none">
						<i class="fa-solid fa-house"></i>Home
					</p>
				</Link>
				<Link to="/explore">
					<p class="sidebar-heading link text-decor-none"><i class="fa-solid fa-magnifying-glass"></i>Explore</p>
				</Link>
				<Link to="/playlist">
					<p class="sidebar-heading link text-decor-none"><i class="fa-solid fa-list"></i>Playlist</p>
				</Link>
				<Link to="/history">
					<p class="sidebar-heading link text-decor-none"><i class="fa-regular fa-clock"></i>History</p>
				</Link>
				<Link to="/liked">
					<p class="sidebar-heading link text-decor-none"><i class="fa-solid fa-thumbs-up"></i>Liked</p>
				</Link>

				{/* <p class="sidebar-heading ">Components</p> */}
				{/* <li class="p1"><a class="link text-decor-none" href="#typography">Typography</a></li> */}

			</ul>
		</aside>
	)
}

export default Sidebar
