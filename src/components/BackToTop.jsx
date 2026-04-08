import { useState, useEffect } from 'react'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isFadedOut, setIsFadedOut] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const offset = 300
      const offsetOpacity = 1200

      if (scrollTop > offset) {
        setIsVisible(true)
        if (scrollTop > offsetOpacity) {
          setIsFadedOut(true)
        } else {
          setIsFadedOut(false)
        }
      } else {
        setIsVisible(false)
        setIsFadedOut(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (event) => {
    event.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <a
      href="#0"
      className={`cd-top ${isVisible ? 'cd-is-visible' : ''} ${isFadedOut ? 'cd-fade-out' : ''}`}
      onClick={scrollToTop}
    >
      Top
    </a>
  )
}

export default BackToTop