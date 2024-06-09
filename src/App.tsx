import { PracticeHeader } from "./Components/PracticeHeader";
import "./css/index.css";

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
      <PracticeHeader />

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
