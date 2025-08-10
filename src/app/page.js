
export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(145deg, #0a0a0f, #1b1b25)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontFamily: 'sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glassmorphism panel */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '800px',
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
  );
}
