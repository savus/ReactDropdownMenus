import { useState } from "react";
import "../css/header.css";
import { ReactDropdown } from "./ReactDropdown";

export type TActiveTabState = "none" | "react-dropdown";
export function Header() {
  const [activeTabState, setActiveTabState] = useState<TActiveTabState>("none");
  return (
    <div
      className="header"
      onClick={() => {
        if (activeTabState !== "none") setActiveTabState("none");
      }}
    >
      <div className="dropdown" data-dropdown>
        <button className="link" data-dropdown-button>
          Information
        </button>
        <div className="dropdown-menu information-grid">
          <div>
            <div className="dropdown-heading">Free Tutorials</div>
            <div className="dropdown-links">
              <a href="#" className="link">
                All
              </a>
              <a href="#" className="link">
                Latest
              </a>
              <a href="#" className="link">
                Popular
              </a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Courses</div>
            <div className="dropdown-links">
              <a href="#" className="link">
                Javascript
              </a>
              <a href="#" className="link">
                Css
              </a>
              <a href="#" className="link">
                React
              </a>
            </div>
          </div>
          <div>
            <div className="dropdown-heading">Blog</div>
            <div className="dropdown-links">
              <a href="#" className="link">
                All
              </a>
              <a href="#" className="link">
                Latest
              </a>
              <a href="#" className="link">
                Popular
              </a>
            </div>
          </div>
        </div>
      </div>
      <a href="#" className="link">
        Pricing
      </a>
      <a href="#">
        <div className="dropdown" data-dropdown>
          <button className="link" data-dropdown-button>
            Login
          </button>
          <div className="dropdown-menu">
            <form action="#" className="login-form">
              <label htmlFor="email">mail</label>
              <input type="email" name="email" id="email" />
              <label htmlFor="password">password</label>
              <input type="password" name="password" id="password" />
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </a>
      <a href="#">
        <div className="practice-dropdown" data-practice-dropdown>
          <button className="dropdown-button" data-practice-dropdown-button>
            products
          </button>
          <div className="practice-dropdown-menu" data-practice-dropdown-menu>
            <div className="products-header">Products</div>
            <ul className="item-list">
              <li>
                <a href="#">stuff1</a>
              </li>
              <li>
                <a href="#">stuff2</a>
              </li>
              <li>
                <a href="#">stuff3</a>
              </li>
              <li>
                <a href="#">stuff4</a>
              </li>
            </ul>
          </div>
        </div>
      </a>
      <ReactDropdown
        activeTabState={activeTabState}
        setActiveTabState={(activeTabState) => {
          setActiveTabState(activeTabState);
        }}
      />
    </div>
  );
}
