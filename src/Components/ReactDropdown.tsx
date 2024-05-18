import "../css/react-dropdown.css";
import {
  TActiveTabState,
  useActiveTabState,
} from "./Providers/ActiveTabStateProvider";

export function ReactDropdown({
  dropdownState,
}: {
  dropdownState: TActiveTabState;
}) {
  const { activeTabState, setActiveTabState } = useActiveTabState();
  const isStateActive = () =>
    dropdownState === activeTabState ? "active" : "";
  const toggleActiveTab = () =>
    activeTabState === dropdownState
      ? setActiveTabState("none")
      : setActiveTabState(dropdownState);
  return (
    <>
      <div className={`react-dropdown ${isStateActive()}`}>
        <button
          data-react-dropdown-button
          className="react-dropdown-button"
          onClick={() => {
            toggleActiveTab();
          }}
        >
          React Dropdown
        </button>
        <div className="react-dropdown-menu" data-react-dropdown-menu>
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
