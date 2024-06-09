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
              <div className="dropdown " data-dropdown>
                <a href="#" className="dropdown-button" data-dropdown-button>
                  Menu 1
                </a>
                <div className="dropdown-menu" data-dropdown-menu>
                  <ul>
                    <li>
                      <div className="dropdown " data-dropdown>
                        <a
                          href="#"
                          className="dropdown-button"
                          data-dropdown-button
                        >
                          Submenu 1
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown " data-dropdown>
                <a href="#" className="dropdown-button" data-dropdown-button>
                  Menu 2
                </a>
                <div className="dropdown-menu" data-dropdown-menu>
                  <ul>
                    <li>
                      <div className="dropdown " data-dropdown>
                        <a
                          href="#"
                          className="dropdown-button"
                          data-dropdown-button
                        >
                          Submenu 2
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown " data-dropdown>
                <a href="#" className="dropdown-button" data-dropdown-button>
                  Menu 3
                </a>
                <div className="dropdown-menu" data-dropdown-menu>
                  <ul>
                    <li>
                      <div className="dropdown " data-dropdown>
                        <a
                          href="#"
                          className="dropdown-button"
                          data-dropdown-button
                        >
                          Submenu 3
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <div className="dropdown " data-dropdown>
                <a href="#" className="dropdown-button" data-dropdown-button>
                  Menu 1
                </a>
                <div className="dropdown-menu" data-dropdown-menu>
                  <ul>
                    <li>
                      <div className="dropdown " data-dropdown>
                        <a
                          href="#"
                          className="dropdown-button"
                          data-dropdown-button
                        >
                          Submenu 1
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <section className="menu-slider-container container container-lg">
        <h3>Menu Slider</h3>
        <div className="slider">
          <div className="silder-menu">
            <div className="menu-title">Title</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Link 1
                </a>
              </li>
            </ul>
          </div>
          <div className="silder-menu">
            <div className="menu-title">Title</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Link 1
                </a>
              </li>
            </ul>
          </div>
          <div className="silder-menu">
            <div className="menu-title">Title</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Link 1
                </a>
              </li>
            </ul>
          </div>
          <div className="silder-menu">
            <div className="menu-title">Title</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link">
                  Link 1
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="slider-btns">
          <button>Left</button>
          <button>Right</button>
        </div>
      </section>
    </>
  );
}

export default App;
