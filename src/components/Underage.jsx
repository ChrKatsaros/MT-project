function Underage() {
  return (
    <div
      style={{
        height: '100vh',
        background: '#0a0a0a',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <h1>Access Restricted</h1>

      <p style={{ maxWidth: '500px', marginTop: '15px', color: '#aaa' }}>
        You must be at least 18 years old to access this website.
      </p>
    </div>
  );
}

export default Underage;
