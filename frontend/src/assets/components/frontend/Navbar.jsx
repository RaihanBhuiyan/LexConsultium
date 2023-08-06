import React from 'react'

export default function Navbar() {
  return (
    <nav id="main-navigation" className="header__menu main-navigation d-none d-lg-flex">
		<ul>
			<li><a href="/">HOME</a></li>
			<li><a href="/about">ABOUT</a></li>
			<li><a href="/feature">FEATURES</a></li>
			<li>
				<a href="/service">SERVICE</a>
			</li>
			
			
			<li><a href="/contact">CONTACT</a></li>
		</ul>
	</nav>
  )
}
