import "../css/header.css";

export function Header() {
  return (
    <div className="header">
      <div className="dropdown" data-dropdown>
        <button className="link" data-dropdown-button>
          Information
        </button>
        <div className="dropdown-menu">Dropdown Content</div>
      </div>
      <a href="#" className="link">
        Pricing
      </a>
      <button className="link" data-dropdown-button>
        Login
      </button>
    </div>
  );
}
