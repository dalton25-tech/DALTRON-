import Navbar from "../components/Navbar";

function Aria() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON PHONE</p>

          <h1>
            Meet Aria.
            <br />
            Power that
            <br />
            listens.
          </h1>

          <p>
            Aria is DALTRON's flagship phone — built around Nexa,
            with an AI button and fingerprint interaction designed
            to make the ecosystem feel instant in your hand.
          </p>

          <div className="nexa-buttons">
            <a href="#aria-specs">See Specs</a>
            <a href="/nexa">Meet Nexa</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>A</span>
          </div>
        </div>
      </section>

      <section id="aria-specs" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY ARIA</p>

          <h2>
            Built around
            <br />
            intelligence.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>AI Button</h3>
            <p>
              A dedicated hardware button brings Nexa to the
              surface instantly, from any screen or app.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Fingerprint ID</h3>
            <p>
              Secure, on-device fingerprint interaction unlocks
              the phone and confirms sensitive actions.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Always Connected</h3>
            <p>
              Aria stays in sync with Sora, Orbit, and the rest
              of the DALTRON device family in real time.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Built for Nexa</h3>
            <p>
              Nexa runs natively on Aria, understanding context
              across calls, messages, and apps.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">ARIA + DALTRON</p>

          <h2>
            One phone.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Aria is designed as the pocket entry point into
            DALTRON's software, devices, and cloud.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Aria</div>
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
          <p className="section-label">ARIA STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Aria's hardware and software are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Aria — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aria;