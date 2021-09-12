import React from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
	render() {
		return(
			<nav id="Navbar" className="fixed-top shadow-lg rounded">
				<ul className="nav justify-content-center align-items-center">
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/">Home</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/about">About</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/experience">Experience</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/skills">Skills</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/interest">Interest</Link>
				  </li>
				  <li className="nav-item">
				    <Link className="nav-link text-dark fw-bolder" to="/awards">Awards</Link>
				  </li>
				</ul>
			</nav>
		)
	}
}