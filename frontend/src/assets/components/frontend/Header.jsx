import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
export default function Header() {
  return (

		<header id="header" className="header sticky--header">

			{/* <!-- Header Top Area --> */}
			<div className="header__top bg--blue d-none d-lg-block">
				<div className="container">
					<div className="header__top__inner">
						<ul className="header__top__info">
							<li>
								<a href="#"><i className="flaticon-old-typical-phone"></i> +8801894921471</a>
							</li>
							<li>
								<a href="#"><i className="flaticon-black-back-closed-envelope-shape"></i> adv.badrul@gmail.com</a>
							</li>
						</ul>
						<div className="header__top__button">
							{/* <a className="cr-btn cr-btn--lg" href="appointment.php">
								<Link className='cr-btn cr-btn--lg'  to={'/login'}>
									User Login
								</Link>
							</a> */}
						</div>
					</div>
				</div>
			</div>
			{/* <!--// Header Top Area --> */}

			{/* <!-- Header Bottom Area --> */}
			<div className="header__bottom bg--white">
				<div className="container">
					<div className="header__bottom__inner">

						<div className="header__logo">
							<a href="index.html">
								<img src="assets/images/logo/logo.png" alt="header logo" />
							</a>
						</div>

						{/* <!-- Main Navigation --> */}
						<Navbar></Navbar>
						{/* <!--// Main Navigation --> */}

						<button className="header__toggle d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvasMenu">
							<span></span>
							<span></span>
							<span></span>
						</button>
					</div>
				</div>

			</div>
			{/* <!--// Header Bottom Area --> */}


		</header>
  )
}
