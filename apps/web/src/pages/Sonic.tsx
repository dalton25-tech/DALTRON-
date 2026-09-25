import Navbar from "../components/Navbar";

function Sonic() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON EARBUDS</p>

          <h1>
            Meet Sonic.
            <br />
            Pure sound.
            <br />
            No limits.
          </h1>

          <p>
            Sonic is DALTRON's earbuds, tuned for clarity and
            built with Nexa on tap for hands-free control.
          </p>

          <div className="nexa-buttons">
            <a href="#sonic-features">See Features</a>
            <a href="/aria">Meet Aria</a>
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

      <section id="sonic-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY SONIC</p>

          <h2>
            Sound tuned
            <br />
            to you.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Adaptive Audio</h3>
            <p>
              Noise cancellation and sound profiles adjust to
              your environment in real time.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Nexa on Tap</h3>
            <p>
              Ask Nexa, take calls, or control music with a
              simple touch, no phone required.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>All-Day Battery</h3>
            <p>
              Extended battery life with a compact, fast-charging
              case built to keep up with your day.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Instant Pairing</h3>
            <p>
              Sonic connects automatically across Aria, Sora,
              and every DALTRON device you own.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">SONIC + DALTRON</p>

          <h2>
            One pair of earbuds.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Sonic is designed as the audio layer that keeps you
            connected to Nexa wherever you go.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Sonic</div>
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
          <p className="section-label">SONIC STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Sonic's hardware and audio tuning are in active
            design, following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Sonic — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Sonic;
