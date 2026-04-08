import { useEffect, useRef } from 'react'
import $ from 'jquery'
import 'owl.carousel'

function Hero() {
  const carouselRef = useRef(null)

  const slides = [
    {
      image: 'images/ms/ms1.png',
      supheading: 'The Best Organic Solution in Ghana',
      heading: 'We Are MS Agro-Organics',
      description:
        'Transforming agriculture with organic solutions that boost crop yields while protecting our planet\'s ecosystem.',
    },
    {
      image: 'images/ms/ms2.png',
      supheading: 'The Best Organic Solution in Ghana',
      heading: 'Environmental Friendly',
      description:
        'Empowering farmers with sustainable, eco-friendly agricultural products that enhance soil health and increase productivity.',
    },
    {
      image: 'images/ms/ms3.png',
      supheading: 'The Best Organic Solution in Ghana',
      heading: 'High Quality & Guaranted',
      description:
        'Revolutionizing farming through innovative, safe organic chemicals that maximize harvest potential and environmental preservation.',
    },
  ]

  useEffect(() => {
    // Initialize Owl Carousel
    if (carouselRef.current) {
      $(carouselRef.current).owlCarousel({
        loop: true,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        navContainer: '.custom-nav',
        items: 1,
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
    <div id="oc-fullslider" className="banner">
      <div
        ref={carouselRef}
        className="owl-carousel owl-theme full-screen"
      >
        {slides.map((slide, index) => (
          <div className="item" key={index}>
            <img src={slide.image} alt="Slider" />
            <div className="overlay-bg"></div>
            <div className="container d-flex align-items-center text-center">
              <div className="wrap-caption">
                <p className="caption-supheading">{slide.supheading}</p>
                <h1 className="caption-heading">{slide.heading}</h1>
                <p>{slide.description}</p>
                <a href="#about-section" className="btn btn-secondary">
                  MORE ABOUT US
                </a>{' '}
                <a href="#contact-section" className="btn btn-primary">
                  CONTACT US NOW
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="custom-nav owl-nav"></div>
    </div>
  )
}

export default Hero