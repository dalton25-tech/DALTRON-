function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">

        <div className="footer-brand">
          <div className="footer-logo">
            DALTRON
          </div>

          <p>
            Building intelligent technology,
            powerful devices, and connected
            digital experiences for the future.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h4>Explore</h4>
            <a href="#products">Products</a>
            <a href="#ecosystem">Ecosystem</a>
            <a href="#innovation">Innovation</a>
            <a href="#company">Company</a>
          </div>

          <div>
            <h4>Technology</h4>
            <a href="/nexa">Nexa</a>
            <a href="#intelligent">Sora</a>
            <a href="#intelligent">Orbit</a>
            <a href="#cloud">Cloud</a>
          </div>

          <div>
            <h4>Connect</h4>
            <a href="#cta">Contact</a>
            <a href="#company">Careers</a>
            <a href="#innovation">News</a>
            <a href="#home">Sign in</a>
          </div>  
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © 2026 DALTRON TECHNOLOGIES. All rights reserved.
        </p>

        <div>
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;