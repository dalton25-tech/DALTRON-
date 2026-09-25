import Navbar from "../components/Navbar";

function Saito() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON SPEAKER</p>

          <h1>
            Meet Saito.
            <br />
            Feel the
            <br />
            sound.
          </h1>

          <p>
            Saito is DALTRON's speaker, built to fill a room with
            sound and bring Nexa into your home.
          </p>

          <div className="nexa-buttons">
            <a href="#saito-features">See Features</a>
            <a href="/sonic">Meet Sonic</a>
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

      <section id="saito-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY SAITO</p>

          <h2>
            Room-filling
            <br />
            sound.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Rich Sound</h3>
            <p>
              Tuned drivers deliver full, balanced audio across
              music, calls, and everyday listening.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Nexa at Home</h3>
            <p>
              Ask questions, set reminders, and control other
              DALTRON devices with your voice.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Multi-Room Ready</h3>
            <p>
              Pair multiple Saito speakers together for synced
              sound throughout the home.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Always Connected</h3>
            <p>
              Saito stays in sync with Aria, Sora, and the rest
              of the DALTRON device family.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">SAITO + DALTRON</p>

          <h2>
            One speaker.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Saito is designed as the voice of Nexa at home,
            connected to DALTRON's devices and cloud.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Saito</div>
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
          <p className="section-label">SAITO STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Saito's hardware and audio tuning are in active
            design, following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Saito — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Saito;
