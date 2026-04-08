function Services() {
  const services = [
    {
      image: 'images/ms/m8.png',
      title: 'Soil Enrichment Solutions',
      description:
        'We offer a range of organic fertilizers designed to enhance soil fertility, promoting healthier crops and sustainable farming practices.',
    },
    {
      image: 'images/ms/m9.png',
      title: 'Crop Production Boosters',
      description:
        'Our eco-friendly products are formulated to increase crop yields by up to 30%, ensuring farmers achieve maximum productivity while protecting the environment.',
    },
    {
      image: 'images/ms/m7.png',
      title: 'Educational Support Programs',
      description:
        'We provide training and resources for farmers on sustainable practices, empowering them with knowledge to make informed decisions for their agricultural success.',
    },
  ]

  return (
    <div className="section" id="services-section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading text-center mb-4">Our Services</h2>
              <p className="subheading text-center mb-5">
                Empowering Sustainable Agriculture Through Innovative Organic Solutions
                for Every Farmer
              </p>
            </div>
          </div>

          <div className="row">
            {services.map((service, index) => (
              <div
                className="col-sm-12 col-md-12 col-lg-4 mb-4"
                key={index}
              >
                <div className="box-image-1">
                  <div className="media-box">
                    <img
                      src={service.image}
                      className="img-fluid"
                      alt={service.title}
                    />
                  </div>
                  <div className="body-content">
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services