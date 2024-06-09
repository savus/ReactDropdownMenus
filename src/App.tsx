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
      <header className="practice-header">
        <nav className="practice-navbar">
          <ul className="practice-navbar-nav">
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 1
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 2
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 3
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 4
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 5
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="practice-nav-item">
              <div className="" data-dropdown>
                <a href="#" data-dropdown-button>
                  Link 6
                </a>
                <div data-dropdown-menu>
                  <ul className="dropdown-menu">
                    <li className="dropdown-menu-item">
                      <a href="#">Link 1</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 2</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 3</a>
                    </li>
                    <li className="dropdown-menu-item">
                      <a href="#">Link 4</a>
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
