import React from 'react';

function Projects(props) {
	return (
		<>
			<section className="portfolio-block project-no-images">
				<div className="container">
					<div className="heading"><h2>Recent Work</h2></div>
					<div className="row">
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>Finance Management</h3>
								<h4>It is GUI Desktop App Built with electron framework</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/finance-management"
								>See More</a
								>
								<div className="tags">JavaScript</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>Sim8085</h3>
								<h4>Intel 8085 Microprocessor Simulator Android App.</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/Sim8085"
								>See More</a
								>
								<div className="tags">
									Java
								</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>FlappyBird </h3>
								<h4>Flappy Bird game using OpenGL and Java . Based on Youtube Tutorial by The
									Cherno</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/FlappyBird"
								>See More</a
								>
								<div className="tags">Java</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>image-guess</h3>
								<h4>An Image Guess made using React.js</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/image-guess"
								>See More</a
								>
								<div className="tags">JavaScript</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>Store Manager App</h3>
								<h4>Android App for managing Store Inventory and Bills</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/Store_Manager_APP"
								>See More</a
								>
								<div className="tags">C#</div>
							</div>
						</div>
						<div className="col-md-6 col-lg-4">
							<div className="project-card-no-image">
								<h3>Store Manager API</h3>
								<h4>API for Store Manager APP</h4>
								<a
									className="btn btn-outline-primary btn-sm"
									role="button"
									href="https://github.com/KTarun003/Store_Manager_API"
								>See More</a
								>
								<div className="tags">C#</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default Projects;