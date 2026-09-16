function Hardware() {
  return (
    <section id="hardware" className="hardware">
      <div className="hardware-header">
        <p className="section-label">DALTRON HARDWARE</p>

        <h2>
          Designed for the
          <br />
          connected future.
        </h2>

        <p>
          DALTRON hardware is designed to work seamlessly
          with the software and intelligence powering the ecosystem.
        </p>
      </div>

      <div className="hardware-grid">
        <article className="hardware-card hardware-phone">
          <div className="hardware-visual">
            <div className="device-phone">
              <div className="device-screen">
                DALTRON
              </div>
            </div>
          </div>

          <div className="hardware-info">
            <span>SMARTPHONE</span>
            <h3>DALTRON Phone</h3>
            <p>
              A new generation of mobile technology built
              around the DALTRON ecosystem.
            </p>
          </div>
        </article>

        <article className="hardware-card hardware-tablet">
          <div className="hardware-visual">
            <div className="device-tablet">
              <div className="device-screen">
                LUMA
              </div>
            </div>
          </div>

          <div className="hardware-info">
            <span>TABLET</span>
            <h3>Luma</h3>
            <p>
              A powerful connected tablet designed for work,
              creativity, and everyday life.
            </p>
          </div>
        </article>

        <article className="hardware-card">
          <div className="hardware-visual">
            <div className="device-watch">
              <div className="device-screen">
                H
              </div>
            </div>
          </div>

          <div className="hardware-info">
            <span>WEARABLE</span>
            <h3>Hikari</h3>
            <p>
              Intelligent wearable technology that keeps
              your digital world close.
            </p>
          </div>
        </article>

        <article className="hardware-card">
          <div className="hardware-visual">
            <div className="device-earbuds">
              <div></div>
              <div></div>
            </div>
          </div>

          <div className="hardware-info">
            <span>AUDIO</span>
            <h3>Sonic</h3>
            <p>
              Immersive wireless audio designed to connect
              naturally with your DALTRON devices.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Hardware;