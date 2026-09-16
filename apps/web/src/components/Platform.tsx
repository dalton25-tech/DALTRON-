function Platform() {
  return (
    <section id='platform' className="platform">
      <div className="platform-header">
        <p className="section-label">DALTRON DIGITAL PLATFORM</p>

        <h2>
          One platform.
          <br />
          Endless possibilities.
        </h2>

        <p>
          DALTRON brings accounts, applications, services,
          intelligence, and devices together through one
          connected digital platform.
        </p>
      </div>

      <div className="platform-grid">
        <article className="platform-card">
          <span>01</span>
          <h3>DALTRON Account</h3>
          <p>
            One identity designed to connect users across
            DALTRON services and devices.
          </p>
          <div className="platform-line"></div>
        </article>

        <article className="platform-card">
          <span>02</span>
          <h3>Applications</h3>
          <p>
            A growing collection of software built for
            productivity, communication, creativity, and everyday life.
          </p>
          <div className="platform-line"></div>
        </article>

        <article className="platform-card">
          <span>03</span>
          <h3>AI Services</h3>
          <p>
            Intelligent services powered by Nexa and connected
            throughout the DALTRON ecosystem.
          </p>
          <div className="platform-line"></div>
        </article>

        <article className="platform-card">
          <span>04</span>
          <h3>Device Sync</h3>
          <p>
            A connected experience that allows DALTRON devices
            and services to work together seamlessly.
          </p>
          <div className="platform-line"></div>
        </article>
      </div>

      <div className="platform-flow">
        <div>USER</div>
        <span>→</span>
        <div>ACCOUNT</div>
        <span>→</span>
        <div>SERVICES</div>
        <span>→</span>
        <div>INTELLIGENCE</div>
        <span>→</span>
        <div>DEVICES</div>
      </div>
    </section>
  );
}

export default Platform; 