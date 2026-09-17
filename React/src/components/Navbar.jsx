import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import logo from '../assets/deanza-logo.png'
import { Menu, X, ChevronDown } from 'lucide-react'

const navigationItems = [
  {
    to: '/registration',
    label: 'Student Registration',
    subsections: [
      { id: 'priority-registration', label: 'Priority Registration' },
      { id: 'picking-a-professor', label: 'Picking a Good Professor' },
      { id: 'registration-steps', label: 'Registration Steps' },
      { id: 'ge-requirements', label: 'General Education (GE)' },
    ],
  },
  {
    to: '/transferring',
    label: 'Transferring',
    subsections: [
      { id: 'assist', label: 'ASSIST' },
      { id: 'tag', label: 'Transfer Admission Guarantee' },
      { id: 'honors', label: 'Honors Program' },
    ],
  },
  {
    to: '/vta-card',
    label: 'VTA Card',
    subsections: [
      { id: 'how-to-apply', label: 'How to Apply' },
    ],
  },
  {
    to: '/campus-map',
    label: 'Campus Map',
  },
  {
    to: '/about',
    label: 'About Us',
    subsections: [
      { id: 'our-goal', label: 'Our Goal' },
      { id: 'activities', label: 'Activities' },
      { id: 'contact-info', label: 'Contact Information' },
      { id: 'contributors', label: 'Project Contributors' },
    ],
  },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState(null)
  const [openMobileAccordions, setOpenMobileAccordions] = useState({})
  
  const location = useLocation()
  const navigate = useNavigate()
  const navRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDesktopDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleSubsectionClick = (to, sectionId, isMobile = false) => {
    if (isMobile) {
      setIsMenuOpen(false)
    }
    setOpenDesktopDropdown(null)

    if (location.pathname === to) {
      scrollToSection(sectionId)
    } else {
      navigate(to)
      setTimeout(() => {
        scrollToSection(sectionId)
      }, 150)
    }
  }

  const toggleMobileAccordion = (to) => {
    setOpenMobileAccordions((prev) => ({
      ...prev,
      [to]: !prev[to],
    }))
  }

  return (
    <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
      <nav className="site-nav" ref={navRef}>
        <div className="nav-container">
          <NavLink className="brand" to="/" aria-label="De Anza home">
            <img src={logo} alt="De Anza College" />
          </NavLink>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigationItems.map((item) => {
              const hasSub = item.subsections && item.subsections.length > 0
              const isOpen = openDesktopDropdown === item.to

              return (
                <div key={item.to} className="nav-item-wrapper">
                  <div className="nav-item-header">
                    <NavLink
                      to={item.to}
                      onClick={() => setOpenDesktopDropdown(null)}
                    >
                      {item.label}
                    </NavLink>
                    {hasSub && (
                      <button
                        type="button"
                        className={`nav-chevron-btn ${isOpen ? 'is-open' : ''}`}
                        aria-expanded={isOpen}
                        aria-label={`Toggle ${item.label} subsections`}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          setOpenDesktopDropdown(isOpen ? null : item.to)
                        }}
                      >
                        <ChevronDown size={16} />
                      </button>
                    )}
                  </div>

                  {hasSub && isOpen && (
                    <div className="nav-dropdown-menu" role="menu">
                      {item.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          className="nav-dropdown-item"
                          onClick={() => handleSubsectionClick(item.to, sub.id)}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label={
              isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
            }
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav
            id="mobile-menu"
            className={`mobile-nav ${isMenuOpen ? 'is-open' : ''}`}
            aria-label="Mobile navigation"
          >
            {navigationItems.map((item) => {
              const hasSub = item.subsections && item.subsections.length > 0
              const isAccordionOpen = !!openMobileAccordions[item.to]

              return (
                <div key={item.to} className="mobile-nav-item">
                  <div className="mobile-nav-header">
                    <NavLink
                      to={item.to}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                    {hasSub && (
                      <button
                        type="button"
                        className={`mobile-chevron-btn ${isAccordionOpen ? 'is-open' : ''}`}
                        aria-label={`Toggle ${item.label} subsections`}
                        onClick={() => toggleMobileAccordion(item.to)}
                      >
                        <ChevronDown size={20} />
                      </button>
                    )}
                  </div>

                  {hasSub && isAccordionOpen && (
                    <div className="mobile-subsections">
                      {item.subsections.map((sub) => (
                        <button
                          key={sub.id}
                          type="button"
                          className="mobile-subsection-item"
                          onClick={() => handleSubsectionClick(item.to, sub.id, true)}
                        >
                          {sub.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>
      </nav>
    </header>
  )
}
