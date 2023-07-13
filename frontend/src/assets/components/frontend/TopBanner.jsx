import React from 'react'

export default function TopBanner() {
  return (
	<div className="banner-area">
		<div className="banner banner-slider-active banner--animated-content">

			{/* <!-- Single Banner --> */}
			<div className="banner__single bg-image--1" data-black-overlay="6">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="banner__single__content">
								<h1>From 
									<span className="color--theme"> legal headaches to legal solutions ?</span> trust us 
									<span className="color--theme"> to</span> handle it all</h1>
								<a href="contact.php" className="cr-btn">
									<span>Contact Now</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- //Single Banner --> */}

			{/* <!-- Single Banner --> */}
			<div className="banner__single bg-image--2" data-black-overlay="6">
				<div className="container">
					<div className="row justify-content-center">
						<div className="col-lg-8">
							<div className="banner__single__content text-center">
								<h1>Navigating legal problems 
									<span className="color--theme"> is our expertise?</span> let us guide you
									<span className="color--theme"> to </span> a solution</h1>
								<a href="contact.html" className="cr-btn">
									<span>Contact Now</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- //Single Banner --> */}

			{/* <!-- Single Banner --> */}
			<div className="banner__single bg-image--3" data-black-overlay="6">
				<div className="container">
					<div className="row">
						<div className="col-xl-7 col-lg-8">
							<div className="banner__single__content">
								<h1>Legal problems
									<span className="color--theme">don't have to be daunting?</span>our team specializes
									<span className="color--theme"> in </span> finding solutions.</h1>
								<a href="contact.html" className="cr-btn">
									<span>Contact Now</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- //Single Banner --> */}

		</div>
	</div>
  )
}
