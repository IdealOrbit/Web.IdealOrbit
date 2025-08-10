export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #000000, #1a1a1a)',
      color: 'white',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Navbar */}
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1rem 2rem',
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>IdealOrbit</div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>About</a>
          <a href="#projects" style={{ color: 'white', textDecoration: 'none' }}>Projects</a>
          <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{
        minHeight: 'calc(100vh - 70px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '2rem'
      }}>
        <div style={{
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            Shaping Ideas Into Reality
          </h1>
          <p style={{ fontSize: '1.2rem', color: '#ccc' }}>
            We create apps, games, and software that inspire and innovate.
          </p>
        </div>
      </div>
    </div>
  );
}
