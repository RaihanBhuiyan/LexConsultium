import React from 'react'

export default function Footer() {
  return (
	<footer id="footer" className="footer-area fixed--footer">

			{/* <!-- Footer Widgets Area --> */}
			<div className="footer-area__widgets section-padding--md bg--dark--light">
				<div className="container">
					<div className="footer-area__logo text-center">
						<a href="index.html">
							{/* <!-- <img src="assets/images/logo/old_logo/logo-footer.webp" alt="footer logo"> --> */}
							<img src="assets/images/logo/logo-theme-2.png" alt="footer logo" />
						</a>
					</div>
					
					<div className="widget-area footer--widgets">

						{/* <!-- Single Widget --> */}
						<section className="widget widget-about">
							<h5 className="widget-title">ABOUT LexConsultium</h5>
							<p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium oloremque laudantium, totam rem onsectetur sires
								to obtain pain of itself because</p>
							<div className="social-icons social-icons--rounded">
								<ul>
									<li className="facebook">
										<a href="https://www.facebook.com/">
											<i className="fa fa-facebook"></i>
										</a>
									</li>
									<li className="twitter">
										<a href="https://twitter.com/">
											<i className="fa fa-twitter"></i>
										</a>
									</li>
									<li className="instagram">
										<a href="https://www.instagram.com/">
											<i className="fa fa-instagram"></i>
										</a>
									</li>
									<li className="google-plus">
										<a href="https://plus.google.com/discover">
											<i className="fa fa-google-plus"></i>
										</a>
									</li>
									<li className="google-plus">
										<a href="/login">
										<i class="fa-thin fa-user"></i>
										</a>
									</li>									
								</ul>
							</div>
						</section>
						{/* <!--// Single Widget --> */}

						{/* <!-- Single Widget --> */}
						<section className="widget widget-quick-links">
							<h5 className="widget-title">QUICK LINKS</h5>
							<ul>
								<li>
									<a href="services.html">Our Services</a>
								</li>
								<li>
									<a href="features.html">Features</a>
								</li>
								<li>
									<a href="about-us.html">About Us</a>
								</li>
								<li>
									<a href="#">Help Centre</a>
								</li>
								<li>
									<a href="contact.html">Contact Us</a>
								</li>
							</ul>
						</section>
						{/* <!--// Single Widget --> */}

						{/* <!-- Single Widget --> */}
						<section className="widget widget-twitter-feed">
							<h5 className="widget-title">Twitter Feed</h5>
							<ul>
								<li>
									<p>
										<a href="#">@Alex Smith</a>, unde omnis te us error sit voluptatem</p>
									<span className="time">
										<a href="#">10 Mins ago</a>
									</span>
								</li>
								<li>
									<p>
										<a href="#">@Justin Bieber</a>, unde omnis te us error sit voluptatem</p>
									<span className="time">
										<a href="#">12 Mins ago</a>
									</span>
								</li>
							</ul>
						</section>
						{/* <!--// Single Widget --> */}

						{/* <!-- Single Widget --> */}
						<section className="widget widget-contact-info">
							<h5 className="widget-title">Address</h5>
							<ul>
								<li>
									<p>LexConsultium TAX SERVICES</p>
								</li>
								<li>
									<p>Unit 4 & 5, 1205 Walpole Ave</p>
									<p>Saskatoon, SK S7H 2X2, Canada</p>
								</li>
								<li>
									<p>
										<a href="callto://(306) 241-0316">(306) 241-0316</a>
									</p>
								</li>
								<li>
									<p>
										<a href="mailto://info@LexConsultiumtax.ca">info@LexConsultiumtax.ca</a>
									</p>
								</li>
							</ul>
						</section>
						{/* <!--// Single Widget --> */}

					</div>
				</div>
			</div>
			{/* <!--// Footer Widgets Area --> */}

			{/* <!-- Footer Copyright Area --> */}
			<div className="footer-area__copyright bg--dark">
				<div className="container">
					<div className="copyright text-center">
						{/* <!-- <p>&copy; 2022 <span> LexConsultium  </span> Made with <i className="fa fa-heart"></i> by <a href="#">AR</a></p> --> */}
						<p>&copy; 2023 <span> LexConsultium TAX SERVICES</span> </p>
					</div>
				</div>
			</div>
			{/* <!--// Footer Copyright Area --> */}

		</footer>
  )
}
