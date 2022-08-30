import React from 'react';

function Footer(props) {
	return (
		<footer className="page-footer">
			<div className="container">
				<div className="links">
					<a href="#">About me</a>
					{/*<a href="#">Contact me</a>*/}
					<a href="projects-no-images.html">Projects</a>
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