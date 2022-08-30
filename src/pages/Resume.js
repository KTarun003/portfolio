import React from 'react';

function Resume(props) {
	return (
		<>
			<section className="portfolio-block block-intro border-bottom">
				<div className="container">
					<div
						className="avatar"
						style={{
							backgroundImage: "url(/assets/img/avatars/avatar.jpeg)"
							}}
					></div>
					<div className="about-me">
						<p>
							Hello! I am <strong>K Tarun Reddy</strong>. I am a Full Stack Developer. I have passion for
							minimal
							and easy to use web apps.
						</p>
					</div>
				</div>
			</section>
			<section className="portfolio-block cv">
				<div className="container">
					{/*<div class="work-experience group">
						<div class="heading">
							<h2 class="text-center">Work Experience</h2>
						</div>
						<div class="item">
							<div class="row">
								<div class="col-md-6">
									<h3>Web Developer</h3>
									<h4 class="organization">Amazing Co.</h4>
								</div>
								<div class="col-md-6">
									<span class="period"
										>10/2013 - 04/2015</span
									>
								</div>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean eget velit ultricies,
								feugiat est sed, efficitur nunc, vivamus vel
								accumsan dui.
							</p>
						</div>
						<div class="item">
							<div class="row">
								<div class="col-6">
									<h3>Front End Developer</h3>
									<h4 class="organization">
										Innovative Org.
									</h4>
								</div>
								<div class="col-md-6">
									<span class="period"
										>05/2015 - 12/2017</span
									>
								</div>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean eget velit ultricies,
								feugiat est sed, efficitur nunc, vivamus vel
								accumsan dui.
							</p>
						</div>
						<div class="item">
							<div class="row">
								<div class="col-md-6">
									<h3>Web Developer</h3>
									<h4 class="organization">Special Inc.</h4>
								</div>
								<div class="col-md-6">
									<span class="period"
										>12/2017 - Present</span
									>
								</div>
							</div>
							<p class="text-muted">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean eget velit ultricies,
								feugiat est sed, efficitur nunc, vivamus vel
								accumsan dui.
							</p>
						</div>
					</div>*/}
					<div className="education group">
						<div className="heading">
							<h2 className="text-center">Education</h2>
						</div>
						<div className="item">
							<div className="row">
								<div className="col-md-6">
									<h3>High School (10+2)</h3>
									<h4 className="organization">
										Kendriya Vidyalaya AFS Begumpet
									</h4>
								</div>
								<div className="col-6">
									<span className="period"
									>2019</span>
								</div>
							</div>
							<p className="text-muted">
								Completed 10+2 in 2019 with 69.4% in Maths, Physics, Chemistry & Computer Science
							</p>
						</div>
						<div className="item">
							<div className="row">
								<div className="col-md-6">
									<h3>Bachelor of Science</h3>
									<h4 className="organization">
										Andhra Loyola College, Vijayawada
									</h4>
								</div>
								<div className="col-md-6">
									<span className="period"
									>06/2019 - 06/2022</span>
								</div>
							</div>
							<p className="text-muted">
								Completed B.Sc. in Maths, Physics and Computer Science and Physics as Major with 70%.
							</p>
						</div>
					</div>
					<div className="work-experience group">
						<div className="heading">
							<h2 className="text-center">Work Experience</h2>
						</div>
						<div className="item">
							<div className="row">
								<div className="col-md-6">
									<h3>Wegan</h3>
								</div>
								<div className="col-md-6">
									<span className="period">02/2021 - 07/2021</span>
								</div>
							</div>
							<p className="text-muted">
								It is a blog website for vegans with a mobile app for managing the blog.
								It is made using ASP.NET Core MVC and ASP.NET Core Web API.
								<br/>
									Github Repo : https://github.com/KTarun003/wegan
							</p>
						</div>
						<div className="item">
							<div className="row">
								<div className="col-6">
									<h3>InterScOM</h3>
								</div>
								<div className="col-md-6">
									<span className="period">10/2020 - 10/2021</span>
								</div>
							</div>
							<p className="text-muted">
								This project started as a project for a hackathon I participated in with my friend.
								Now I am updating and adding features to the project.It is made using ASP.NET Core MVC .
								<br/>
									Github Repo : https://github.com/KTarun003/InterScOM
							</p>
						</div>
					</div>
					<div className="group">
						<div className="row">
							<div className="col-md-6">
								<div className="skills portfolio-info-card">
									<h2>Skills</h2>
									<h3>MySQL</h3>
									<div className="progress">
										<div
											className="progress-bar"
											aria-valuenow="80"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{width: "80%"}}>
											<span className="visually-hidden">80%</span>
										</div>
									</div>
									<h3>C# (Back End)</h3>
									<div className="progress">
										<div
											className="progress-bar"
											aria-valuenow="70"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{width: "70%"}}>
											<span className="visually-hidden">70%</span>
										</div>
									</div>
									<h3>JavaScript (Front & Back End)</h3>
									<div className="progress">
										<div
											className="progress-bar"
											aria-valuenow="65"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{width: "65%"}}>
											<span className="visually-hidden">65%</span>
										</div>
									</div>
									<h3>MongoDB</h3>
									<div className="progress">
										<div
											className="progress-bar"
											aria-valuenow="65"
											aria-valuemin="0"
											aria-valuemax="100"
											style={{width: "65%"}}>
											<span className="visually-hidden">65%</span>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6">
								<div className="contact-info portfolio-info-card">
									<h2>Contact Info</h2>
									<div className="row">
										<div className="col-1">
											<i className="icon ion-person icon"></i>
										</div>
										<div className="col-9">
											<span>K Tarun Reddy</span>
										</div>
									</div>
									<div className="row">
										<div className="col-1">
											<i
												className="icon ion-ios-telephone icon"
											></i>
										</div>
										<div className="col-9">
											<span>+91 8008582508</span>
										</div>
									</div>
									<div className="row">
										<div className="col-1">
											<i className="icon ion-at icon"></i>
										</div>
										<div className="col-9">
											<span>tarunreddyk036@gmail.com</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="hobbies group">
						<div className="heading">
							<h2 className="text-center">Hobbies</h2>
						</div>
						<p className="text-center text-muted">
							Playing Video Games
							<br/>
								Plane Spotting
								<br/>
									Experimenting with Physics Simulations
									<br/>
										Reading Books
						</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default Resume;