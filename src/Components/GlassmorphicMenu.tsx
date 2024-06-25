import "../css/glassmorphism-menu.css";

export const GlassmorphicMenu = () => {
  return (
    <section className="glassmorphism-menu">
      <div className="glassmorphism-container">
        <header className="header">
          <a href="#" className="logo">
            Logo
          </a>
          <nav className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Portfolio</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </nav>
        </header>
      </div>
    </section>
  );
};
