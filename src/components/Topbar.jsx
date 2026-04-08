function Topbar() {
  return (
    <div className="topbar d-none d-md-block">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-8 col-md-10 col-lg-9">
            <div className="info">
              <div className="info-item">
                <i className="fa fa-phone"></i> 053-260-7243
              </div>
              <div className="info-item">
                <i className="fa fa-map-marker"></i> Ny 11, Gomoa Nyekuadze - Ghana
              </div>
            </div>
          </div>

          <div className="col-sm-4 col-md-2 col-lg-3">
            <div className="social-links pull-right d-inline-flex">
              <a
                href="https://web.facebook.com/profile.php?id=61570306281885"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                href="https://wa.me/233205457620?text=Hello%20Ms%20Agro!%20I%27m%20interested%20in%20your%20organic%20liquid%20fertilizer.%20Please%20share%20more%20details"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-whatsapp"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ms-agro-organic-limited-149651340/"
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar