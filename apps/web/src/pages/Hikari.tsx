import Navbar from "../components/Navbar";

function Hikari() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON SMARTWATCH</p>

          <h1>
            Meet Hikari.
            <br />
            Messages.
            <br />
            Apps. Music.
          </h1>

          <p>
            Hikari is DALTRON's smartwatch, built for messages,
            apps, music, files, and internet access from your
            wrist.
          </p>

          <div className="nexa-buttons">
            <a href="#hikari-features">See Features</a>
            <a href="/b4t">Explore B4T</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>H</span>
          </div>
        </div>
      </section>

      <section id="hikari-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY HIKARI</p>

          <h2>
            Everything,
            <br />
            on your wrist.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Apps &amp; Messages</h3>
            <p>
              Reply to messages and run lightweight apps without
              needing to reach for your phone.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Music &amp; Files</h3>
            <p>
              Carry music and files with you, synced from your
              other DALTRON devices.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Connected Access</h3>
            <p>
              Built-in internet access keeps Hikari useful even
              when your phone isn't nearby.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Nexa on Your Wrist</h3>
            <p>
              Ask Nexa questions or control other devices with a
              glance and a tap.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">HIKARI + DALTRON</p>

          <h2>
            One smartwatch.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Hikari is designed as the always-on wrist companion
            connected to Nexa and the DALTRON device family.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Hikari</div>
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
          <p className="section-label">HIKARI STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Hikari's hardware and interface are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Hikari — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hikari;
