import React, { useEffect, useRef, useState } from 'react';
import Button from '../Button/Button';
import './Navbar.css';

type NavLink = {
  label: string;
  href: string;
  active?: boolean;
  dropdown?: boolean;
};

const navLinks: NavLink[] = [
  { label: 'Home', href: '/#home', active: true },
  { label: 'Features', href: '/#features' },
  { label: 'Testimonials', href: '/#testimonials' },
  { label: 'Contact', href: '/contact' },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      ref={navRef}
      className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
      id="navbar"
    >
      <div className="container navbar__inner">
        {/* Logo */}
        <a href="/#home" className="navbar__logo" aria-label="Axonara Home">
          <span className="navbar__logo-icon">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="14" cy="14" r="14" fill="#FF6500"/>
              <path d="M15.5 7L8 16H12.5L11.5 21.5L19 12.5H14.5L15.5 7Z" fill="white"/>
            </svg>
          </span>
          <span className="navbar__logo-text">Axonara</span>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__links" aria-label="Main navigation">
          {navLinks.map((link) => (
            <div key={link.label} className="navbar__link-item">
              <a 
                href={link.href} 
                className={`navbar__link ${link.active ? 'navbar__link--active' : ''}`}
              >
                {link.label}
                {link.dropdown && (
                  <svg className="navbar__link-arrow" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </a>
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="navbar__cta">
          <Button label="Get Started" variant="primary" href="/contact" size="md" />
        </div>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`}>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button label="Get Started" variant="primary" href="/contact" size="lg" />
      </div>
    </header>
  );
};

export default Navbar;
