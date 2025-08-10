import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(145deg, #000000, #1a1a1a)',
        color: 'white',
        fontFamily: 'sans-serif',
        position: 'relative',
        overflow: 'hidden',
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
          position: 'relative',
        }}
      >
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IdealOrbit</div>

        {/* Hamburger button for mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            flexDirection: 'column',
            justifyContent: 'space-around',
            width: '24px',
            height: '24px',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
            zIndex: 20,
          }}
          aria-label="Toggle menu"
          id="hamburger-btn"
        >
          <span
            style={{
              width: '24px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: '0.3s',
              transformOrigin: '1px',
              marginBottom: '4px',
            }}
          ></span>
          <span
            style={{
              width: '24px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: '0.3s',
              marginBottom: '4px',
            }}
          ></span>
          <span
            style={{
              width: '24px',
              height: '3px',
              background: 'white',
              borderRadius: '2px',
              transition: '0.3s',
            }}
          ></span>
        </button>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
          }}
          id="nav-links"
        >
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>
            About
          </a>
          <a
            href="#projects"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Projects
          </a>
          <a
            href="#contact"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        style={{
          minHeight: 'calc(100vh - 70px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
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
          <h1
            style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
            }}
          >
            Coding the Future, One Orbit at a Time
          </h1>
          <p
            style={{
              fontSize: '1.2rem',
              color: '#ccc',
            }}
          >
            Fueling creativity with code and design.
          </p>
        </div>
      </div>

      {/* Inline responsive styles */}
      <style>{`
        @media (max-width: 600px) {
          nav {
            padding: 1rem;
          }
          #hamburger-btn {
            display: flex !important;
          }
          #nav-links {
            flex-direction: column;
            background: rgba(255, 255, 255, 0.05);
            position: absolute;
            top: 70px;
            right: 0;
            width: 150px;
            border-radius: 8px;
            padding: 1rem;
            display: none;
          }
          #nav-links.show {
            display: flex !important;
          }
          #nav-links a {
            padding: 0.5rem 0;
          }
          h1 {
            font-size: 1.8rem !important;
          }
          p {
            font-size: 1rem !important;
          }
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const btn = document.getElementById('hamburger-btn');
              const nav = document.getElementById('nav-links');
              btn.addEventListener('click', () => {
                nav.classList.toggle('show');
              });
            })();
          `,
        }}
      />
    </div>
  );
}
