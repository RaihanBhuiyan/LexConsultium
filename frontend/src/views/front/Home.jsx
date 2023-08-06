import React from 'react'
import TopBanner from '../../assets/components/frontend/TopBanner';
import OffCanvas from '../../assets/components/frontend/OffCanvas';
// import CarouselSlider from '../../assets/components/frontend/CarouselSlider.jsx';
export default function Home() {
  return (
    <>
    {/* <TopBanner></TopBanner> */}
    {/* <OffCanvas></OffCanvas> */}
    {/* <CarouselSlider></CarouselSlider> */}<br></br>
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
                  <span className="color--theme">LexConsultium</span>”</h4>
                <h3 className="cd-headline cx-heading slide">Our cutting-edge legal solutions offer a 
                  <span className="color--theme cd-words-wrapper cd-words-wrapper-2">
                    <b className="is-visible">unique approach to the </b>
                    <b className="is-visible">  corporate and litigation sector, </b>
                    <b className="is-visible"> delivering measurable results </b>
                  </span>
                  and driving sustainable growth.</h3>
                  <p>LexConsultium is a highly respected law firm in Bangladesh that provides a comprehensive range of legal services to both national and international clients. With a strong reputation for professional excellence in areas such as banking, finance, taxation, and corporate matters, the firm is comprised of a talented team of young and energetic lawyers who are dedicated to achieving positive legal outcomes for their clients</p>
                  <p>LexConsultium prides itself on providing highly professional, efficient, and cost-effective legal assistance and advice to clients in a timely manner. Whether clients need assistance with a specific legal matter or require a step-by-step approach, the firm's expert team of lawyers is committed to delivering successful, sustainable solutions. The firm's focus is on providing high-quality legal services to clients, and its lawyers work closely with clients to understand their unique business needs and objectives, providing customized legal solutions to help them achieve their goals.</p>
                  
                {/* <a href="about-us.html" className="cr-btn">
                  <span>Read More</span>
                </a> */}
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
              <p className="wow fadeInUp" data-wow-delay="0.15s">
              LEXCONSULTIUM employs advanced technology and encryption methods to safeguard client data and transactions. The company also has strict security protocols and regularly conducts audits to identify and address potential vulnerabilities.</p>
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
              <p className="wow fadeInUp" data-wow-delay="0.15s">
              Expert teams at Lexconsultium are carefully assembled with professionals from diverse backgrounds to ensure a comprehensive approach to problem-solving. Our team members possess a range of skills and expertise,
               allowing us to tackle complex issues and deliver innovative solutions to our clients.                
                </p>
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
              <p className="wow fadeInUp" data-wow-delay="0.15s">
              At LexConsultium, we understand the importance of reliable support for our clients. That's why we offer 24/7 support to ensure that any issues or concerns are promptly addressed. Our dedicated support team is available around the clock to provide timely and effective assistance, giving you peace of mind and uninterrupted service. </p>
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
                        <a href="single-service.html">Banking  Financial Services</a>
                      </h5>
                      <p>The security documentation includes various deeds, letters, and agreements such as Mortgage, Power of Attorney, Corporate Guarantee, Tripartite Agreement, etc., which are used in asset financing, syndicated lending, debt restructuring, project finance, and structured finance. </p>
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
                        <a href="single-service.html">Corporate Real Estate and Property</a>
                      </h5>
                      <p>LexConsultium provides comprehensive services for property document vetting, development projects, leases, joint ventures, and property restructuring. They assist with mortgages, powers, and registration of deeds at land registry offices, as well as obtaining non-encumbrance certificates and conducting mutation formalities.
                         LexConsultium also engages surveyors for land surveying. </p>
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
                        <a href="single-service.html">Corporate and Commercial</a>
                      </h5>
                      <p>At Lexconsultium, we offer a range of corporate services to meet our clients' needs. Our corporate advisory services provide strategic and practical advice to help clients navigate complex corporate issues. We also assist with corporate compliance and secretarial services, ensuring that clients comply with regulatory requirements. Our team provides services at the Registrar of Joint Stock Companies & Firms, including the incorporation of companies and obtaining search reports. We also facilitate registration of mortgages/charges and obtaining certified copies of various corporate documents. We provide legal advice on commercial transactions, telecommunications, broadcasting, employment, energy, infrastructure, insurance, intellectual property, and private equity and investment. </p>
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
                        <a href="single-service.html">Litigation and dispute resolution</a>
                      </h5>
                      <p>LexConsultium offers a wide range of legal services, including corporate advisory, compliance and secretarial services, as well as debt recovery, bankruptcy, and property-related matters. The firm also provides services for commercial transactions, telecommunications, employment, energy, insurance, intellectual property, private equity, and investment. Additionally, LexConsultium handles criminal and civil matters, arbitration, and judicial reviews. </p>
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
                <a href="callto://+88018949214716">+8801894921471</a></h6>
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
