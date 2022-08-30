import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
	return (
		<nav
			className="navbar navbar-dark navbar-expand-lg fixed-top bg-white portfolio-navbar gradient">
			<div className="container">
				<button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navbarNav">
					<span className="visually-hidden">Toggle navigation</span
					><span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNav">
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link className="nav-link active" to="/">Home</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/projects" >Projects</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/resume" >CV</Link>
						</li>
						{/*<li class="nav-item">
							<Link class="nav-link" to="contact">Contact me</a>
						</li>*/}
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;