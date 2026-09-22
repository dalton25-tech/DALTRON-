function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        DALTRON
      </a>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/#products">Products</a>
        <a href="/#ecosystem">Ecosystem</a>
        <a href="/#company">Company</a>
        <a href="/nexa">Nexa</a>
        <a href="/aria">Aria</a>
      </nav>

      <button className="sign-in">
        Sign in
      </button>
    </header>
  )
}

export default Navbar