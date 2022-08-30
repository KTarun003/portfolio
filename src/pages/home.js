import React from 'react';

function Home(props) {
	return (
		<>
			<section className="portfolio-block block-intro">
				<div className="container">
					<div
						className="avatar"
						style={{
							backgroundImage: `url('%PUBLIC_URL%/assets/images/avatar.jpg')})`,
							}}
					></div>
					<div className="about-me">
						<p>
							Hello! I am <strong>K Tarun Reddy</strong>. I am
							a Full Stack Developer. I have passion for minimal
							and easy to use web apps.
						</p>
					</div>
				</div>
			</section>
			{/*<section class="portfolio-block photography">
				<div class="container">
					<div class="row g-0">
						<div class="col-md-6 col-lg-4 item zoom-on-hover">
							<a href="#"
							><img
								class="img-fluid image"
								src="assets/img/nature/image5.jpg"
							/></a>
						</div>
						<div class="col-md-6 col-lg-4 item zoom-on-hover">
							<a href="#"
							><img
								class="img-fluid image"
								src="assets/img/nature/image2.jpg"
							/></a>
						</div>
						<div class="col-md-6 col-lg-4 item zoom-on-hover">
							<a href="#"
							><img
								class="img-fluid image"
								src="assets/img/tech/image4.jpg"
							/></a>
						</div>
					</div>
				</div>
			</section>*/}
			{/*<section class="portfolio-block call-to-action border-bottom">
				<div class="container">
					<div
						class="d-flex justify-content-center align-items-center content"
					>
						<h3>Like what you see?</h3>
						<button
							class="btn btn-outline-primary btn-lg"
							type="button"
						>
							Hire me
						</button>
					</div>
				</div>
			</section>*/}
			<section className="portfolio-block skills">
				<div className="container">
					<div className="heading"><h2>Special Skills</h2></div>
					<div className="row">
						<div className="col-md-6">
							<div className="card special-skill-item border-0">
								<div
									className="card-header bg-transparent border-0"
								>
									<i className="icon ion-ios-star-outline"></i>
								</div>
								<div className="card-body">
									<h3 className="card-title">Database Design</h3>
									<p className="card-text">
										I have a knack for structuring RDMS to fit the needs of a complex system.
										I have and can design databases to perform a very complex tasks.
									</p>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="card special-skill-item border-0">
								<div
									className="card-header bg-transparent border-0"
								>
									<i
										className="icon ion-ios-lightbulb-outline"
									></i>
								</div>
								<div className="card-body">
									<h3 className="card-title">API Design</h3>
									<p className="card-text">
										A system's successful operation is almost entirely dependent on the design
										of the API.
										API's design is very crucial to an application as it affects the future of
										the system.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Home;