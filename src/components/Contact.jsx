function Contact() {
  return (
    <div
      className="section bgi-cover-center"
      id="contact-section"
      style={{ backgroundImage: 'url(images/ms/ms4.png)' }}
    >
      <div className="content-wrap py-0">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-sm-12 col-md-12 col-lg-7">
              <div className="text-white mt-5">
                <h1 className="section-heading no-after text-primary">
                  Call Us Now to Handle your Nutrient Needs
                </h1>
              </div>
              <a href="tel:053-260-7243" className="btn btn-primary">
                053-260-7243
              </a>
              <div className="spacer-content"></div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-5">
              <div className="img-cta">
                <img
                  src="images/ms/m6.png"
                  alt="Contact"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact