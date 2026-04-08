import { useEffect, useRef } from 'react'
import $ from 'jquery'
import 'owl.carousel'

function Testimonials() {
  const carouselRef = useRef(null)

  const testimonials = [
    {
      image: 'images/ms/m14.png',
      quote: "I was skeptical initially, but their eco-friendly fertilizers have made a remarkable difference in my farm's performance.",
      name: 'Aminata D',
      role: 'Small-Scale Farmer',
    },
    {
      image: 'images/ms/m15.png',
      quote: 'Impressive sustainable approach! These products have significantly improved our soil quality and increased our overall agricultural yields.',
      name: 'Bright Adum',
      role: 'Agricultural Cooperative Leader',
    },
    {
      image: 'images/ms/m16.png',
      quote: "MS Agro-Organics transformed my farm's productivity. Their organic solutions are affordable and incredibly effective for my crops.",
      name: 'Kwame Jojo',
      role: 'Farmer',
    },
  ]

  useEffect(() => {
    if (carouselRef.current) {
      $(carouselRef.current).owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
      })
    }

    return () => {
      if (carouselRef.current) {
        $(carouselRef.current).trigger('destroy.owl.carousel')
      }
    }
  }, [])

  return (
    <div
      className="section bgi-cover-center"
      id="testimonial-section"
      style={{ backgroundImage: 'url(images/ms/ms5-white.png)' }}
    >
      <div className="content-wrap">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <h2 className="section-heading text-center text-black">
                Happy Customers
              </h2>
              <p className="subheading text-center mb-5 text-black">
                What our customers have to say about us.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-8 offset-lg-2">
              <div
                ref={carouselRef}
                id="testimonial"
                className="owl-carousel owl-theme owl-light"
              >
                {testimonials.map((testimonial, index) => (
                  <div className="item" key={index}>
                    <div className="rs-box-testimony">
                      <div className="media-box">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="quote-box">
                        <blockquote className="quote text-black">
                          {testimonial.quote}
                        </blockquote>
                        <div className="quote-name text-black">
                          {testimonial.name}{' '}
                          <span className="quote-name text-black">
                            {testimonial.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials