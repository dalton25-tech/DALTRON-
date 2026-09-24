import Navbar from "../components/Navbar";

function Keto() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON MINI NOTEBOOK</p>

          <h1>
            Meet Keto.
            <br />
            Light. Compact.
            <br />
            Powerful.
          </h1>

          <p>
            Keto is DALTRON's mini notebook, built for study and
            work on the go, with seamless file sync and Vexa
            running underneath.
          </p>

          <div className="nexa-buttons">
            <a href="#keto-features">See Features</a>
            <a href="/sora">Meet Sora</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>K</span>
          </div>
        </div>
      </section>

      <section id="keto-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY KETO</p>

          <h2>
            Built to keep up
            <br />
            with you.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Vexa Inside</h3>
            <p>
              Keto runs on Vexa, its internal assistant and
              system layer tuned for lightweight hardware.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>File Sync</h3>
            <p>
              Documents and notes stay in sync across Keto and
              every other DALTRON device automatically.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>All-Day Battery</h3>
            <p>
              Built for long study and work sessions without
              needing to stay near a charger.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Truly Portable</h3>
            <p>
              A compact, lightweight build made to move with
              you between class, work, and home.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">KETO + DALTRON</p>

          <h2>
            One notebook.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Keto is designed as the lightweight companion that
            keeps work and study connected to DALTRON.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Keto</div>
          <span>↓</span>
          <div>Vexa</div>
          <span>↓</span>
          <div>Cloud</div>
          <span>↓</span>
          <div>Devices</div>
        </div>
      </section>

      <section className="nexa-experience">
        <div className="nexa-experience-content">
          <p className="section-label">KETO STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Keto's hardware and Vexa software are in active
            design, following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Keto — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Keto;
