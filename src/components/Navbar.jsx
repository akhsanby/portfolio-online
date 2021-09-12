import React from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
	render() {
		const linkStyle = "text-black font-bold text-lg";
		const navItems = [
			{ name: "Home", path: "/", linkStyle },
			{ name: "About", path: "/about", linkStyle },
			{ name: "Experience", path: "/experience", linkStyle },
			{ name: "Skills", path: "/skills", linkStyle },
			{ name: "Interest", path: "/interest", linkStyle },
			{ name: "Awards", path: "/awards", linkStyle },
		]
		return(
			<nav id="Navbar" className="fixed shadow-lg rounded">
				<ul className="w-screen h-16 flex justify-center items-center">
					{navItems.map((navItem, index) => 
					  <li key={index} className="p-3 after:content-[''] after:block after:w-0 after:h-1 after:bg-black after:transition-width after:duration-200 hover:after:w-full">
					    <Link className={navItem.linkStyle} to={navItem.path}>{navItem.name}</Link>
					  </li>
					)}
				</ul>
			</nav>
		)
	}
}