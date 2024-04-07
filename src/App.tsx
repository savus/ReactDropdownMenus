import { DropdownItem } from "./Components/DropdownItem";
import { DropdownMenu } from "./Components/DropdownMenu";
import { NavItem } from "./Components/NavItem";
import { Navbar } from "./Components/Navbar";
import "./css/index.css";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon="fa-brands fa-facebook-messenger">
          <></>
        </NavItem>
        <NavItem icon="fa-solid fa-bell">
          <></>
        </NavItem>
        <NavItem icon="fa-solid fa-user">
          <></>
        </NavItem>
        <NavItem icon="fa-solid fa-chevron-down">
          <DropdownMenu>
            <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
              Profile
            </DropdownItem>
            <DropdownItem leftIcon="fa-solid fa-gear" rightIcon="">
              Settings
            </DropdownItem>
            <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
              Profile
            </DropdownItem>
            <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
              Profile
            </DropdownItem>
          </DropdownMenu>
        </NavItem>
      </Navbar>
    </>
  );
}

export default App;
