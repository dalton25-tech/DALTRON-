function Nexa() {
  return (
  <main className="nexa-page">

  <header className="nexa-navbar">
    <a href="/" className="nexa-logo">
      DALTRON
    </a>

    <div className="nexa-nav-right">
      <span>NEXA</span>

      <a href="/">
        Back to DALTRON
      </a>
    </div>
  </header>
      <section className="nexa-hero">
        <div className="nexa-hero-content">
          <p className="section-label">DALTRON INTELLIGENCE</p>

          <h1>
            Meet Nexa.
            <br />
            Intelligence for
            <br />
            everything.
          </h1>

          <p>
            Nexa is DALTRON's intelligent assistant,
            designed to understand, assist, and connect
            people with the entire DALTRON ecosystem.
          </p>

          <div className="nexa-buttons">
            <a href='#nexa-experience'>Experience Nexa</a>
            <a href='#nexa-capabilities'>Learn More</a>
          </div>
        </div>

        <div className="nexa-core">
          <div className="nexa-ring nexa-ring-one"></div>
          <div className="nexa-ring nexa-ring-two"></div>
          <div className="nexa-orb">
            <span>N</span>
          </div>
        </div>
      </section>

      <section id="nexa-capabilities" className="nexa-capabilities">
        <div className="nexa-section-header">
          <p className="section-label">WHAT NEXA DOES</p>

          <h2>
            Intelligence that
            <br />
            works with you.
          </h2>
        </div>

        <div className="nexa-grid">
          <article>
            <span>01</span>
            <h3>Understand</h3>
            <p>
              Nexa understands natural language and
              helps users communicate with technology
              naturally.
            </p>
          </article>

          <article>
            <span>02</span>
            <h3>Assist</h3>
            <p>
              From everyday tasks to complex workflows,
              Nexa is designed to help users get things done.
            </p>
          </article>

          <article>
            <span>03</span>
            <h3>Connect</h3>
            <p>
              Nexa connects DALTRON services, applications,
              devices, and intelligent experiences.
            </p>
          </article>

          <article>
            <span>04</span>
            <h3>Learn</h3>
            <p>
              Nexa is designed to become more useful through
              context, interaction, and connected services.
            </p>
          </article>
        </div>
      </section>

      <section className="nexa-ecosystem">
        <div>
          <p className="section-label">NEXA + DALTRON</p>

          <h2>
            One intelligence layer.
            <br />
            An entire ecosystem.
          </h2>

          <p>
            Nexa is designed to work across DALTRON software,
            devices, cloud infrastructure, and future products.
          </p>
        </div>

        <div className="nexa-connections">
          <div>Nexa</div>
          <span>↓</span>
          <div>Sora</div>
          <span>↓</span>
          <div>Cloud</div>
          <span>↓</span>
          <div>Devices</div>
        </div>
      </section>
      </main>
    
  );
}

export default Nexa;