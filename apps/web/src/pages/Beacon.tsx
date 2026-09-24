import Navbar from "../components/Navbar";

function Beacon() {
  return (
    <main className="nexa-page">
      <Navbar />

      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON BROWSER</p>

          <h1>
            Meet Beacon.
            <br />
            Faster.
            <br />
            Smarter. Safer.
          </h1>

          <p>
            Beacon is DALTRON's browser, built with Orbit search
            and Nexa woven directly into how people navigate the
            web.
          </p>

          <div className="nexa-buttons">
            <a href="#beacon-features">See Features</a>
            <a href="/orbit">Meet Orbit</a>
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

      <section id="beacon-features" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHY BEACON</p>

          <h2>
            Browsing,
            <br />
            guided.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Orbit Built In</h3>
            <p>
              Search with Orbit directly from the address bar,
              blending web results with AI answers.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Nexa Sidebar</h3>
            <p>
              Ask Nexa to summarize, translate, or explain any
              page without leaving the tab.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Privacy First</h3>
            <p>
              Built-in tracker blocking keeps browsing fast and
              keeps user data under the user's control.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Cross-Device Sync</h3>
            <p>
              Tabs, bookmarks, and history sync across Aria,
              Sora, and Luma automatically.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">BEACON + DALTRON</p>

          <h2>
            One browser.
            <br />
            The whole ecosystem.
          </h2>

          <p>
            Beacon is designed as the window into DALTRON's
            search, intelligence, and connected devices.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Beacon</div>
          <span>↓</span>
          <div>Orbit</div>
          <span>↓</span>
          <div>Nexa</div>
          <span>↓</span>
          <div>Devices</div>
        </div>
      </section>

      <section className="nexa-experience">
        <div className="nexa-experience-content">
          <p className="section-label">BEACON STATUS</p>

          <h2>
            Designed.
            <br />
            In development.
          </h2>

          <p>
            Beacon's engine and interface are in active design,
            following the DALTRON ecosystem roadmap.
          </p>

          <div className="nexa-status">
            <span></span>
            Beacon — in development
          </div>
        </div>
      </section>
    </main>
  );
}

export default Beacon;
