import React from 'react'

export default function OffCanvas() {
  return (

	<div className="offcanvas offcanvas-start" tabIndex="2" id="offcanvasMenu">
		<div className="offcanvas-header">
			<div className="offcanvas__logo">
				<a href="index.html">
					<img src="assets/images/logo/logo-theme-2.jpg" alt="header logo" />
				</a>
			</div>
			<button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
		</div>
		<div className="offcanvas-body">

			<ul className="offcanvas__info">
				<li>
					<a href="#"><i className="flaticon-old-typical-phone"></i> (306) 241-0316</a>
				</li>
				<li>
					<a href="#"><i className="flaticon-black-back-closed-envelope-shape"></i> info@jamjamtax.ca</a>
				</li>
			</ul>

			<nav className="canvas-menu">
				<ul>
					<li><a href="index.php">HOME</a></li>
					<li><a href="about-us.php">ABOUT</a></li>
					<li><a href="features.php">FEATURES</a></li>
					<li>
						<a href="services.php">SERVICE</a>
					</li>
					<li><a href="contact.php">CONTACT</a></li>
				</ul>
			</nav>

			<div className="offcanvas__button">
				<a className="cr-btn cr-btn--lg" href="appointment.php">
					<span>Make an appointment</span>
				</a>
			</div>
		</div>
	</div>
  )
}
