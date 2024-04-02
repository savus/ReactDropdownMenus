import { DropdownMenu } from "./Components/DropdownMenu";
import { NavItem } from "./Components/NavItem";
import { Navbar } from "./Components/Navbar";
import "./css/index.css";

import { CSSTransitions } from "react-transition-group";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon="fa-solid fa-plus">
          <></>
        </NavItem>
        <NavItem icon="fa-solid fa-bell">
          <></>
        </NavItem>
        <NavItem icon="fa-brands fa-facebook-messenger">
          <></>
        </NavItem>

        <NavItem icon="fa-solid fa-caret-down">
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </>
  );
}

export default App;
