import "../css/header.css";

export function Header() {
  return (
    <div className="header">
      <div className="dropdown">
        <button className="link">Information</button>
        <div className="dropdown-menu">Dropdown Content</div>
      </div>
      <a href="#" className="link">
        Pricing
      </a>
      <button className="link">Login</button>
    </div>
  );
}
