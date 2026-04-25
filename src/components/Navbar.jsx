import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
  // Scrolled state: add background when user scrolls down
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      {/* Logo */}
      <div className="navbar__logo">NETFLUX</div>

      {/* Navigation links */}
      <ul className="navbar__links">
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>New & Popular</li>
        <li>My List</li>
      </ul>

      {/* Right side: search + profile */}
      <div className="navbar__right">
        <span className="navbar__search">🔍</span>
        <div className="navbar__avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Profile"
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
