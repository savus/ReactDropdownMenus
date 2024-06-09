import { DropdownMenu } from "./Components/DropdownMenu";
import { Header } from "./Components/Header";
import { NavItem } from "./Components/NavItem";
import { Navbar } from "./Components/Navbar";
import { TabStateProvider } from "./Components/Providers/TabStateProvider";
import "./css/index.css";
import "./css/practice-header.css";

function App() {
  return (
    <>
      {/* <TabStateProvider>
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
      </TabStateProvider> */}
      <header>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="dropdown active" data-dropdown>
                <a href="#" className="dropdown-button" data-dropdown-button>
                  Menu 1
                </a>
                <div className="dropdown-menu" data-dropdown-menu>
                  <ul>
                    <li>
                      <div className="dropdown active" data-dropdown>
                        <a
                          href="#"
                          className="dropdown-button"
                          data-dropdown-button
                        >
                          Submenu 1
                        </a>
                        {/* <div className="dropdown-menu" data-dropdown-menu>
                          <ul>
                            <li>Sub-submenu 1</li>
                          </ul>
                        </div> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default App;
