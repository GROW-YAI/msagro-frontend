function About() {
  const features = [
    {
      icon: 'fa-globe',
      title: 'Green Revolution',
      description:
        'Transforming agriculture through organic, eco-friendly solutions that boost crop yields and support environmental sustainability.',
    },
    {
      icon: 'fa-certificate',
      title: 'Farming Forward',
      description:
        'Pioneering innovative agricultural technologies that empower farmers to achieve higher productivity with minimal environmental impact.',
    },
    {
      icon: 'fa-thumbs-up',
      title: "Earth's Guardians",
      description:
        'Delivering sustainable agricultural solutions that protect soil health, enhance crop performance, and support global farming.',
    },
    {
      icon: 'fa-star',
      title: 'Harvest Innovators',
      description:
        'Reimagining agricultural potential by providing safe, effective organic chemicals that maximize farmer success responsibly.',
    },
  ]

  return (
    <div className="section" id="about-section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading text-center mb-4">Why Choose Us?</h2>
              <p className="subheading text-center mb-5">
                Innovative agricultural solutions transforming farming through sustainable
                technologies, organic practices, and responsible global stewardship.
              </p>
            </div>
          </div>

          <div className="row">
            {features.map((feature, index) => (
              <div
                className="col-sm-12 col-md-6 col-lg-3 mb-4"
                key={index}
              >
                <div className="box-icon-1 text-center">
                  <div className="icon">
                    <i className={`fa ${feature.icon}`}></i>
                  </div>
                  <div className="body-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
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

export default About