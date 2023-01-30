import React from 'react'
import TopBanner from '../../assets/components/frontend/TopBanner';
import OffCanvas from '../../assets/components/frontend/OffCanvas';

export default function Home() {
  return (
    <>
    <TopBanner></TopBanner>
    <OffCanvas></OffCanvas>
    <main className="page-content">

    {/* <!-- About Area --> */}
    <section id="about-area" className="cr-section about-area bg--white">
      <div className="container">
        <div className="about-area__inside">
          <div className="row">
            <div className="col-lg-5">
              <div className="about-area__image">
                <img className="wow slideInLeft" data-wow-delay="0" src="assets/images/about/about-thumbnail.webp" alt="about area thumb" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="about-area__content">
                <h4>WE ARE “
                  <span className="color--theme">JAMJAM</span>”</h4>
                <h3 className="cd-headline cx-heading slide">PROVIDE BEST TAX SOLUTION FOR YOUR
                  <span className="color--theme cd-words-wrapper cd-words-wrapper-2">
                    <b className="is-visible">Business</b>
                    <b>Performance</b>
                    <b>Success</b>
                  </span>
                  TO GROWUP</h3>
                <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae </p>
                <p>Parchitect beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                  fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                  qui dolorem</p>
                <a href="about-us.html" className="cr-btn">
                  <span>Read More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!-- //About Area --> */}

    {/* <!-- Features Area --> */}
    <section id="features-area" className="cr-section features-area">
      <div className="row g-0">

        {/* <!-- Single Feature --> */}
        <div className="col-lg-4">
          <div className="feature">
            <div className="feature__icon">
              <span>
                <i className="flaticon-shield"></i>
              </span>
              <span>
                <i className="flaticon-shield"></i>
              </span>
            </div>
            <div className="feature__content">
              <h4 className="wow fadeInUp">
                <a href="features.html">ENSURE SECURITY</a>
              </h4>
              <p className="wow fadeInUp" data-wow-delay="0.15s">Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque </p>
            </div>
          </div>
        </div>
        {/* <!--// Single Feature --> */}

        {/* <!-- Single Feature --> */}
        <div className="col-lg-4">
          <div className="feature active">
            <div className="feature__icon">
              <span>
                <i className="flaticon-team"></i>
              </span>
              <span>
                <i className="flaticon-team"></i>
              </span>
            </div>
            <div className="feature__content">
              <h4 className="wow fadeInUp">
                <a href="features.html">EXPERT TEAM</a>
              </h4>
              <p className="wow fadeInUp" data-wow-delay="0.15s">Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque </p>
            </div>
          </div>
        </div>
        {/* <!--// Single Feature --> */}

        {/* <!-- Single Feature --> */}
        <div className="col-lg-4">
          <div className="feature">
            <div className="feature__icon">
              <span>
                <i className="flaticon-24-hours"></i>
              </span>
              <span>
                <i className="flaticon-24-hours"></i>
              </span>
            </div>
            <div className="feature__content">
              <h4 className="wow fadeInUp">
                <a href="features.html">24/7 SUPPORT</a>
              </h4>
              <p className="wow fadeInUp" data-wow-delay="0.15s">Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem aperiam eaque </p>
            </div>
          </div>
        </div>
        {/* <!--// Single Feature --> */}

      </div>
    </section>
    {/* <!--// Features Area --> */}

    {/* <!-- Service Area --> */}
    <section id="service-area" className="service-area section-padding--xlg bg--white">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10">
            <div className="section-title">
              <h4>OUR SERVICES</h4>
              <h2>PROVIDE BEST
                <span className="color--theme">SERVICES</span>
              </h2>
              <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa quae</p>
            </div>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12">
            <div className="service-area__services">
              <div className="row">

                {/* <!-- Single Service --> */}
                <div className="col-lg-6 col-md-6 wow flipInX">
                  <div className="service">
                    <div className="service__icon">
                      <img src="assets/images/icons/service-icon-user.webp" alt="service icon" />
                    </div>
                    <div className="service__content">
                      <h5>
                        <a href="single-service.html">PERSONAL TAX</a>
                      </h5>
                      <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem per </p>
                    </div>
                  </div>
                </div>
                {/* <!--// Single Service --> */}

                {/* <!-- Single Service --> */}
                <div className="col-lg-6 col-md-6 wow flipInX">
                  <div className="service">
                    <div className="service__icon">
                      <img src="assets/images/icons/service-icon-bar.webp" alt="service icon" />
                    </div>
                    <div className="service__content">
                      <h5>
                        <a href="single-service.html">CORPORATE TAX</a>
                      </h5>
                      <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem per </p>
                    </div>
                  </div>
                </div>
                {/* <!--// Single Service --> */}

                {/* <!-- Single Service --> */}
                <div className="col-lg-6 col-md-6 wow flipInX">
                  <div className="service">
                    <div className="service__icon">
                      <img src="assets/images/icons/service-icon-briefcase.webp" alt="service icon" />
                    </div>
                    <div className="service__content">
                      <h5>
                        <a href="single-service.html">Business TAX</a>
                      </h5>
                      <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem per </p>
                    </div>
                  </div>
                </div>
                {/* <!--// Single Service --> */}

                {/* <!-- Single Service --> */}
                <div className="col-lg-6 col-md-6 wow flipInX">
                  <div className="service">
                    <div className="service__icon">
                      <img src="assets/images/icons/service-icon-pie.webp" alt="service icon" />
                    </div>
                    <div className="service__content">
                      <h5>
                        <a href="single-service.html">Notary Public</a>
                      </h5>
                      <p>Perspiciatis unde omnis ist natus error sit voluptatem accusantium loremque tium totam rem per </p>
                    </div>
                  </div>
                </div>
                {/* <!--// Single Service --> */}

              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
    {/* <!--// Service Area --> */}

    {/* <!-- Funfact Area --> */}
    <div id="funfact-area" className="funfact-area bg--white">
      <div className="funfacts">
        <div className="row g-0">

          {/* <!--  Single Funfact --> */}
          <div className="col-lg-3 col-sm-6">
            <div className="funfact text-center">
              <h1>
                <span className="counter">349</span>
              </h1>
              <h5>TRUSTED CLIENTS</h5>
            </div>
          </div>
          {/* <!--//  Single Funfact --> */}

          {/* <!--  Single Funfact --> */}
          <div className="col-lg-3 col-sm-6">
            <div className="funfact text-center">
              <h1>
                <span className="counter">109</span>
              </h1>
              <h5>Awards Win</h5>
            </div>
          </div>
          {/* <!--//  Single Funfact --> */}

          {/* <!--  Single Funfact --> */}
          <div className="col-lg-3 col-sm-6">
            <div className="funfact text-center">
              <h1>
                <span className="counter">459</span>
              </h1>
              <h5>Project Done</h5>
            </div>
          </div>
          {/* <!--//  Single Funfact --> */}

          {/* <!--  Single Funfact --> */}
          <div className="col-lg-3 col-sm-6">
            <div className="funfact text-center">
              <h1>
                <span className="counter">19</span>
              </h1>
              <h5>Expert Advisor</h5>
            </div>
          </div>
          {/* <!--//  Single Funfact --> */}

        </div>
      </div>
    </div>
    {/* <!--// Funfact Area --> */}

    {/* <!-- Testimonial Area --> */}
    <div id="testimonial-area" className="testimonial-area section-padding--xlg bg--grey">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="testimonial text-center">

              {/* <!-- Testimonial Content --> */}
              <div className="testimonial__content testimonial-content-slider-active">

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

                {/* <!-- Testimonial Content Single --> */}
                <div className="testimonial__content__single">
                  <p>Parchitecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
                    quia consequuntur magni dolores eos qui ratione voluptatem </p>
                </div>
                {/* <!--// Testimonial Content Single --> */}

              </div>
              {/* <!--// Testimonial Content --> */}

              {/* <!-- Testimonial Author --> */}
              <div className="testimonial__author testimonial-author-slider-active">

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-1.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>DAVID MILLER</h6>
                    <span>President</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-2.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>RAISA MARIYA</h6>
                    <span>CEO</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-3.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>SHON SMITH</h6>
                    <span>Executive</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-1.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>DAVID MILLER</h6>
                    <span>President</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-2.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>RAISA MARIYA</h6>
                    <span>CEO</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

                {/* <!-- Single Author --> */}
                <div className="testimonial__author__single">
                  <div className="testimonial__author__image">
                    <img src="assets/images/testimonial/testimonial-author-3.webp" alt="testimonial author" />
                  </div>
                  <div className="testimonial__author__description">
                    <h6>SHON SMITH</h6>
                    <span>Executive</span>
                  </div>
                </div>
                {/* <!--// Single Author --> */}

              </div>
              {/* <!--// Testimonial Author --> */}

            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!--// Testimonial Area --> */}

    {/* <!-- Call To Action Area --> */}
    <section id="cta-area" className="cta-area section-padding--sm bg--grey--light bg--abstruct-mask">

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="calltoaction text-center">
              <h3>NEED ANY HELP AT
                <span className="color--theme"> YOUR TAX SOLUTION?</span>
              </h3>
              <p>Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
                ipsa Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci </p>
              <h6>JUST DAIL
                <a href="callto://(306) 241-0316">(306) 241-0316</a></h6>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* <!--// Call To Action Area --> */}

  </main>
  </>
  )
}
