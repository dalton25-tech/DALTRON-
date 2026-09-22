import Navbar from "../components/Navbar";

function Orbit() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON SEARCH</p>

          <h1>
            Meet Orbit.
            <br />
            Search,
            <br />
            reimagined.
          </h1>

          <p>
            Orbit blends traditional search with AI understanding
            to connect people with information faster and more
            clearly.
          </p>

          <div className="nexa-buttons">
            <a href="#orbit-features">See Features</a>
            <a href="/nexa">Meet Nexa</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>O</span>
          </div>
        </div>
      </section>

      <section id="orbit-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY ORBIT</p>

          <h2>
            Search that
            <br />
            understands.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>AI Understanding</h3>
            <p>
              Orbit reads intent, not just keywords, to surface
              more relevant results.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Classic + AI</h3>
            <p>
              Traditional web results and AI answers sit side by
              side, so users choose how they explore.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Privacy Minded</h3>
            <p>
              Orbit is built to respect user data while still
              delivering fast, relevant results.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Everywhere</h3>
            <p>
              Orbit powers search across Beacon, Sora, and the
              DALTRON apps people use every day.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">ORBIT + DALTRON</p>

          <h2>
            One search layer.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Orbit is designed as the discovery layer connecting
            DALTRON's software, devices, and cloud.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Orbit</div>
          <span>↓</span>
          <div>Nexa</div>
          <span>↓</span>
          <div>Cloud</div>
          <span>↓</span>
          <div>Devices</div>
        </div>
      </section>

      <section className="nexa-experience">
        <div className="nexa-experience-content">
          <p className="section-label">ORBIT STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Orbit's ranking and interface are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Orbit — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Orbit;