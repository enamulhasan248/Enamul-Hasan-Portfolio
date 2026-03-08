import { useState } from 'react'
import { Link } from 'react-scroll'
import ThemeToggle from './ThemeToggle'

const navItems = [
    { to: 'hero', label: 'Home' },
    { to: 'education', label: 'Education' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
]

const Navbar = ({ theme, toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false)

    const closeMenu = () => setMenuOpen(false)

    return (
        <nav className="navbar">
            <div className="container">
                <div className="nav-logo">
                    <span className="first-name">Enamul </span>
                    <span className="last-name">Hasan</span>
                </div>

                <div className="nav-right">
                    <ul className="nav-links desktop">
                        {navItems.map(item => (
                            <li key={item.to}>
                                <Link
                                    className="nav-link"
                                    to={item.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                    activeClass="active"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

                    <button
                        className={`hamburger ${menuOpen ? 'open' : ''}`}
                        onClick={() => setMenuOpen(prev => !prev)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                {navItems.map(item => (
                    <Link
                        key={item.to}
                        className="nav-link"
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={600}
                        activeClass="active"
                        onClick={closeMenu}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}

export default Navbar
