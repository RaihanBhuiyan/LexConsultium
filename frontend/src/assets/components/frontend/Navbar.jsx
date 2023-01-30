import React from 'react'

export default function Navbar() {
  return (
    <nav id="main-navigation" className="header__menu main-navigation d-none d-lg-flex">
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
  )
}
