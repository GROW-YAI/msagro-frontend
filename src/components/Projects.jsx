function Projects() {
  const projects = [
    { image: 'images/ms/m10.png', title: 'Gallery #1' },
    { image: 'images/ms/m11.png', title: 'Gallery #2' },
    { image: 'images/ms/m12.png', title: 'Gallery #3' },
    { image: 'images/ms/recent-work-01.jpg', title: 'Gallery #4' },
  ]

  return (
    <div className="section bg-secondary" id="projects-section">
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading text-center text-white mb-4">
                Recent Projects
              </h2>
              <p className="subheading text-center mb-5">
                Farmers we have helped over the years
              </p>
            </div>
          </div>

          <div className="row popup-gallery gutter-5">
            {projects.map((project, index) => (
              <div
                className="col-xs-12 col-md-6 col-lg-3"
                key={index}
              >
                <div className="box-gallery">
                  <a href={project.image} title={project.title}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid"
                    />
                    <div className="project-info">
                      <div className="project-icon">
                        <span className="fa fa-search"></span>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects