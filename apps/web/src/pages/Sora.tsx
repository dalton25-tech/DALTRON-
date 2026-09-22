import Navbar from "../components/Navbar";

function Sora() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON OS</p>

          <h1>
            Meet Sora.
            <br />
            Your world.
            <br />
            Your OS.
          </h1>

          <p>
            Sora is the operating system built to power DALTRON
            computers — fast, secure, and designed around Nexa
            from the ground up.
          </p>

          <div className="nexa-buttons">
            <a href="#sora-features">See Features</a>
            <a href="/nexa">Meet Nexa</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>S</span>
          </div>
        </div>
      </section>

      <section id="sora-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY SORA</p>

          <h2>
            An OS built
            <br />
            around you.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Nexa Native</h3>
            <p>
              Nexa is built into Sora at the system level, ready
              from search, files, and settings to every app.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Secure by Design</h3>
            <p>
              Sora is built with security and privacy as core
              principles, not an afterthought.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Seamless Sync</h3>
            <p>
              Files, settings, and sessions move between Sora
              and every DALTRON device automatically.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Built for Hardware</h3>
            <p>
              Sora is optimized to run on DALTRON laptops and
              mini PCs, tuned for speed and efficiency.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">SORA + DALTRON</p>

          <h2>
            One operating system.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Sora is designed as the desktop foundation that ties
            DALTRON's software, devices, and cloud together.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Sora</div>
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
          <p className="section-label">SORA STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Sora's core and interface are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Sora — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sora;