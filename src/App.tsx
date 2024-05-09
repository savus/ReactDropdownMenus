import { DropdownItem } from "./Components/DropdownItem";
import { DropdownMenu } from "./Components/DropdownMenu";
import { Header } from "./Components/Header";
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
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <Header />
    </>
  );
}

export default App;
