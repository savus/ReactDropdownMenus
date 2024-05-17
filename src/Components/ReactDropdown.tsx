import { useState } from "react";
import "../css/react-dropdown.css";
import { TActiveTabState } from "./Header";

export function ReactDropdown({
  activeTabState,
  setActiveTabState,
}: {
  activeTabState: TActiveTabState;
  setActiveTabState: (state: TActiveTabState) => void;
}) {
  return (
    <>
      <div
        className={`react-dropdown ${
          activeTabState === "react-dropdown" ? "active" : ""
        }`}
      >
        <button
          className="react-dropdown-button"
          onClick={() => {
            if (activeTabState === "none") setActiveTabState("react-dropdown");
            else setActiveTabState("none");
          }}
        >
          React Dropdown
        </button>
        <div className="react-dropdown-menu">
          <div className="react-header">React Products</div>
          <ul className="item-list">
            <li>
              <a href="#">Item 1</a>
              <a href="#">Item 2</a>
              <a href="#">Item 3</a>
              <a href="#">Item 4</a>
              <a href="#">Item 5</a>
              <a href="#">Item 6</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
