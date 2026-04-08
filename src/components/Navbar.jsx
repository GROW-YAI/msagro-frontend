import { useState, useEffect } from 'react'

function Navbar() {
  const [isSticky, setIsSticky] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollTop > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const navItems = [
    { label: 'HOME', href: '#' },
    { label: 'ABOUT US', href: '#about-section' },
    { label: 'CONTACT US', href: '#contact-section' },
    { label: 'SERVICES', href: '#services-section' },
    { label: 'PROJECTS', href: '#projects-section' },
    { label: 'TESTIMONIALS', href: '#testimonial-section' },
  ]

  return (
    <div className={`navbar-main ${isSticky ? 'stiky' : ''}`}>
      <div className="container">
        <nav id="navbar-example" className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#">
            <img src="images/ms/ms-logo-3.png" alt="MS Agro-Organics" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMobileMenu}
            aria-controls="navbarNavDropdown"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav ml-auto">
              {navItems.map((item, index) => (
                <li className="nav-item" key={index}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar