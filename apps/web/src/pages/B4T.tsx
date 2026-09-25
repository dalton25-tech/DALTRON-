import Navbar from "../components/Navbar";

function B4T() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON WEARABLE</p>

          <h1>
            Meet B4T.
            <br />
            Connect. Store.
            <br />
            Power. You.
          </h1>

          <p>
            B4T is DALTRON's modular bracelet tracker, built from
            swappable modules for power, data, sensors, and
            interaction.
          </p>

          <div className="nexa-buttons">
            <a href="#b4t-features">See Features</a>
            <a href="/oto">Explore Oto</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>B</span>
          </div>
        </div>
      </section>

      <section id="b4t-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY B4T</p>

          <h2>
            Modular.
            <br />
            Intelligent.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Swappable Modules</h3>
            <p>
              Power, data, sensor, and interaction modules snap
              together in a flexible, segmented link design.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Health Tracking</h3>
            <p>
              Built-in sensors monitor health, motion, and
              environment throughout the day.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Secure Data</h3>
            <p>
              The data module handles secure storage and
              communication, with screen-to-screen transfer.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Wireless Charging</h3>
            <p>
              A premium metal finish pairs with fast wireless
              charging for all-day wear.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">B4T + DALTRON</p>

          <h2>
            One bracelet.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            B4T is designed as the always-on connection point
            between you and the DALTRON ecosystem.
          </p>
        </div>

        <div className="nexa-connections">
          <div>B4T</div>
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
          <p className="section-label">B4T STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            B4T's modules and firmware are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            B4T — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default B4T;
