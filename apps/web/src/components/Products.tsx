function Products() {
  return (
    <section id="products" className="products">
      <div className="products-header">
        <p className="section-label">THE DALTRON ECOSYSTEM</p>

        <h2>
          Technology built
          <br />
          as one ecosystem.
        </h2>

        <p className="section-description">
          Software, artificial intelligence, and devices designed
          to work together as one connected experience.
        </p>
      </div>

      <div className="product-grid">
        <article className="product-card">
          <div className="product-icon">N</div>

          <p className="product-category">ARTIFICIAL INTELLIGENCE</p>

          <h3>Nexa</h3>

          <p>
            DALTRON's intelligent assistant, designed for the web,
            mobile applications, and Sora.
          </p>

          <button>Explore Nexa →</button>
        </article>

        <article className="product-card">
          <div className="product-icon">S</div>

          <p className="product-category">OPERATING SYSTEM</p>

          <h3>Sora</h3>

          <p>
            A next-generation operating system designed to power
            DALTRON computers and future devices.
          </p>

          <button>Explore Sora →</button>
        </article>

        <article className="product-card">
          <div className="product-icon">O</div>

          <p className="product-category">SEARCH</p>

          <h3>Orbit</h3>

          <p>
            A modern search experience built to connect people
            with information across the digital world.
          </p>

          <button>Explore Orbit →</button>
        </article>
        <article className="product-card">
          <div className="product-icon">A</div>

          <p className="product-category">PHONE</p>

          <h3>Aria</h3>

          <p>
            DALTRON's flagship phone, built around Nexa with an
            AI button and fingerprint interaction.
          </p>

          <button>Explore Aria →</button>
        </article>

        <article className="product-card">
          <div className="product-icon">L</div>

          <p className="product-category">TABLET</p>

          <h3>Luma</h3>

          <p>
            DALTRON's tablet for learning and entertainment,
            with Nexa built in to study, create, and explore.
          </p>

          <button>Explore Luma →</button>
        </article>
      </div>
    </section>
  );
}

export default Products;