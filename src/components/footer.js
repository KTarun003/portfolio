import React from 'react';
import {Link} from "react-router-dom";

function Footer(props) {
	return (
		<footer className="page-footer">
			<div className="container">
				<div className="links">
					<Link to="/">About me</Link>
					<Link href="/contact">Contact me</Link>
					<Link to="/projects">Projects</Link>
				</div>
				<div className="social-icons">
					<a href="https://www.facebook.com/tarun.reddy.03/"><i className="icon ion-social-facebook"></i></a>
					<a href="https://www.instagram.com/maverick_0_0_3/"><i
						className="icon ion-social-instagram-outline"></i></a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
