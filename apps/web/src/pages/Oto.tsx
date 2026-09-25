import Navbar from "../components/Navbar";

function Oto() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON BLUETOOTH FAMILY</p>

          <h1>
            Meet Oto.
            <br />
            More devices.
            <br />
            More freedom.
          </h1>

          <p>
            Oto is the name for DALTRON's wider family of
            Bluetooth accessories, built to pair instantly and
            work together across the ecosystem.
          </p>

          <div className="nexa-buttons">
            <a href="#oto-features">See Features</a>
            <a href="/sonic">Explore Sonic</a>
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

      <section id="oto-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY OTO</p>

          <h2>
            One family.
            <br />
            Instant pairing.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Universal Pairing</h3>
            <p>
              Every Oto-family device pairs instantly with any
              DALTRON phone, tablet, or computer.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>One Ecosystem</h3>
            <p>
              Sonic, Saito, and future accessories all share the
              Oto connection layer underneath.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Low Power</h3>
            <p>
              Built for efficient, long-lasting connections that
              don't drain your other devices.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Nexa Aware</h3>
            <p>
              Oto devices can be controlled and queried through
              Nexa across the whole family.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">OTO + DALTRON</p>

          <h2>
            One connection layer.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Oto is designed as the shared Bluetooth layer tying
            DALTRON's accessories together.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Oto</div>
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
          <p className="section-label">OTO STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Oto's pairing protocol is in active design, following
            the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Oto — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Oto;
