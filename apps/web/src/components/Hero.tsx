function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-orb">
        <div className="orb-ring orb-ring-one"></div>
        <div className="orb-ring orb-ring-two"></div>
        <div className="orb-core"></div>
      </div>

      <div className="hero-content">
        <p className="hero-label">DALTRON TECHNOLOGIES</p>

        <h1>
          Technology for
          <br />
          the Next Generation.
        </h1>

        <p className="hero-description">
          Building intelligent software, powerful devices, and
          next-generation technology for a connected future.
        </p>

        <div className="hero-buttons">
          <button className="primary-button">
            Explore DALTRON 5
          </button>

          <button className="secondary-button">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;