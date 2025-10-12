import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Floors that feel like home</h1>
          <p>One team to specify, supply and install.</p>
          <button onClick={() => window.location.href = '/products'}>
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
}

