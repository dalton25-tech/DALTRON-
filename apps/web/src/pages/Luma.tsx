import Navbar from "../components/Navbar";

function Luma() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON TABLET</p>

          <h1>
            Meet Luma.
            <br />
            Big ideas.
            <br />
            Portable.
          </h1>

          <p>
            Luma is DALTRON's tablet, built for education and
            entertainment, with Nexa built in to help you learn,
            create, and explore.
          </p>

          <div className="nexa-buttons">
            <a href="#luma-features">See Features</a>
            <a href="/nexa">Meet Nexa</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>L</span>
          </div>
        </div>
      </section>

      <section id="luma-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY LUMA</p>

          <h2>
            Built for
            <br />
            learning and play.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Study Mode</h3>
            <p>
              Nexa helps summarize, quiz, and organize study
              material directly on the tablet.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Entertainment Ready</h3>
            <p>
              A bright, portable display built for streaming,
              reading, and creative apps.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Always Connected</h3>
            <p>
              Luma stays in sync with Aria, Sora, and the rest
              of the DALTRON device family.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Built for Nexa</h3>
            <p>
              Nexa runs natively on Luma, ready across notes,
              browsing, and every app.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">LUMA + DALTRON</p>

          <h2>
            One tablet.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Luma is designed as the portable canvas for learning,
            creating, and staying connected to DALTRON.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Luma</div>
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
          <p className="section-label">LUMA STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Luma's hardware and software are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Luma — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Luma;