function Footer() {
  return (
    <div className="footer">
      <div className="content-wrap pb-0">
        <div className="container">
          <div className="row">
            {/* Column 1: About & Social Media */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="footer-item">
                <img
                  src="images/ms/ms-logo-3.png"
                  alt="MS Agro-Organics Logo"
                  className="logo-bottom"
                />
                <div className="spacer-30"></div>
                <p>
                  MS Agro-Organics provides affordable, organic agricultural
                  solutions that enhance soil fertility, increase crop
                  production, and promote sustainable farming practices for
                  farmers.
                </p>
                <div className="sosmed-icon icon-bg-primary d-inline-flex">
                  <a
                    href="https://web.facebook.com/profile.php?id=61570306281885"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a
                    href="https://wa.me/233205457620?text=Hello%20Ms%20Agro!%20I%27m%20interested%20in%20your%20organic%20liquid%20fertilizer.%20Please%20share%20more%20details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-whatsapp"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ms-agro-organic-limited-149651340/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Quick Links</div>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#about-section">About Us</a>
                  </li>
                  <li>
                    <a href="#products-section">Our Products</a>
                  </li>
                  <li>
                    <a href="#services-section">Services</a>
                  </li>
                  <li>
                    <a href="#contact-section">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3: Contact Info */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Contact Info</div>
                <div className="mb-3">
                  <div className="fw-bold">Address:</div>
                  <p className="mb-0">
                    Ny 11, Gomoa Nyekuadze - Central Region Ghana
                  </p>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">Phone:</div>
                  <p className="mb-0">
                    <a
                      href="tel:+233532607243"
                      className="text-reset text-decoration-none"
                    >
                      +233 53 260 7243
                    </a>
                  </p>
                </div>
                <div className="mb-3">
                  <div className="fw-bold">Email:</div>
                  <p className="mb-0">
                    <a
                      href="mailto:msagroorganics@gmail.com"
                      className="text-reset text-decoration-none"
                    >
                      msagroorganics@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Column 4: Get In Touch */}
            <div className="col-sm-6 col-md-6 col-lg-3">
              <div className="footer-item">
                <div className="footer-title">Ready to Grow?</div>
                <p>
                  Let's discuss how our organic solutions can improve your yield
                  and soil health.
                </p>
                <a href="#contact-section" className="btn btn-primary mt-3">
                  Contact Us Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar for copyright */}
      <div className="mt-5 pt-4 border-top">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-2">
                &copy; 2025 MS Agro-Organics. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer