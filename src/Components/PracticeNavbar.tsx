import { PracticeNavItem } from "./PracticeNavItem";

export const PracticeNavbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <PracticeNavItem buttonText="Menu 1">
          <div className="dropdown-menu" data-dropdown-menu>
            <ul>
              <li>
                <div className="dropdown " data-dropdown>
                  <a href="#" className="dropdown-button" data-dropdown-button>
                    Submenu 1
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </PracticeNavItem>
        <PracticeNavItem buttonText="Menu 2">
          <div className="dropdown-menu" data-dropdown-menu>
            <ul>
              <li>
                <div className="dropdown " data-dropdown>
                  <a href="#" className="dropdown-button" data-dropdown-button>
                    Submenu 2
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </PracticeNavItem>
        <PracticeNavItem buttonText="Menu 3">
          <div className="dropdown-menu" data-dropdown-menu>
            <ul>
              <li>
                <div className="dropdown " data-dropdown>
                  <a href="#" className="dropdown-button" data-dropdown-button>
                    Submenu 3
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </PracticeNavItem>
        <PracticeNavItem buttonText="Menu 4">
          <div className="dropdown-menu" data-dropdown-menu>
            <ul>
              <li>
                <div className="dropdown " data-dropdown>
                  <a href="#" className="dropdown-button" data-dropdown-button>
                    Submenu 4
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </PracticeNavItem>
        <PracticeNavItem buttonText="Menu 5">
          <div className="dropdown-menu" data-dropdown-menu>
            <ul>
              <li>
                <div className="dropdown " data-dropdown>
                  <a href="#" className="dropdown-button" data-dropdown-button>
                    Submenu 5
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </PracticeNavItem>
      </ul>
    </nav>
  );
};
