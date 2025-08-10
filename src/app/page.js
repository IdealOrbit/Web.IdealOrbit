'use client';

import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler for anchor links
  function handleNavClick(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').slice(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // close menu on mobile after click
    }
  }

  return (
    <>
      <div
        style={{
          minHeight: '100vh',
          background: '#000000',  // pure black
          color: 'white',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflowX: 'hidden',
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 100,
          }}
        >
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IdealOrbit</div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="hamburger"
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>

          {/* Nav links */}
          <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#hero" onClick={handleNavClick}>
              Home
            </a>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            paddingTop: '5rem', // leave space for fixed navbar
          }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              maxWidth: '600px',
            }}
          >
            <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
              Coding the Future, One Orbit at a Time
            </h1>
            <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
              Fueling creativity with code and design.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          style={{
            minHeight: '60vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            background: 'rgb(0, 0, 0)',
            color: 'white',
            padding: '4rem 2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              About IdealOrbit
            </h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
              IdealOrbit is a creative tech company focused on crafting innovative
              apps, games, and software solutions that push the boundaries of
              technology and design. We believe in turning visionary ideas into
              digital realities with passion and precision.
            </p>
          </div>
        </section>

        {/* Contact Section (optional placeholder) */}
        <section
          id="contact"
          style={{
            minHeight: '40vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'sans-serif',
            background: 'rgb(0, 0, 0)',
            color: 'white',
            padding: '4rem 2rem',
            textAlign: 'center',
          }}
        >
          <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact Us</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: 1.6 }}>
              Reach out via email at <a href="mailto:contact@idealorbit.com" style={{ color: '#66ccff' }}>
                idealorbit@outlook.com</a>
            </p>
          </div>
        </section>
      </div>

      {/* Styled JSX */}
      <style jsx>{`
        nav a {
          color: white;
          text-decoration: none;
          margin-left: 1.5rem;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 24px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 20;
        }
        .hamburger span {
          width: 24px;
          height: 3px;
          background: white;
          border-radius: 2px;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
          align-items: center;
        }

        /* Responsive for smaller screens */
        @media (max-width: 600px) {
          .hamburger {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 70px;
            right: 0;
            background: rgba(0, 0, 0);
            backdrop-filter: blur(10px);
            border-radius: 8px;
            flex-direction: column;
            width: 150px;
            padding: 1rem;
            display: none;
          }
          .nav-links.open {
            display: flex;
          }

          nav a {
            margin: 0.5rem 0;
          }
        }
      `}</style>
    </>
  );
}
