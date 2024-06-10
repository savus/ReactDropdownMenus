import { PracticeHeader } from "./Components/PracticeHeader";
import "./css/index.css";
import "./css/menu-slider.css";

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
        <div className="slider">
          <h3>Menu Slider</h3>
          <div className="slider-menu active" data-menu="products">
            <div className="menu-title">Products</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="pricing">
                  Pricing
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="apps">
                  Apps
                </a>
              </li>
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="department">
                  Department
                </a>
              </li>
            </ul>
          </div>
          <div className="slider-menu" data-menu="pricing">
            <div className="menu-title">Pricing</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="pricing-1">
                  pricing-1
                </a>
              </li>
              <li>
                <button className="menu-link" data-link="products">
                  Back to Products
                </button>
              </li>
            </ul>
          </div>
          <div className="slider-menu" data-menu="apps">
            <div className="menu-title">Apps</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="link-1">
                  Link 1
                </a>
              </li>
              <li>
                <button className="menu-link" data-link="products">
                  Back to Products
                </button>
              </li>
            </ul>
          </div>
          <div className="slider-menu" data-menu="department">
            <div className="menu-title">Department</div>
            <ul className="menu-list">
              <li className="menu-item">
                <a href="#" className="menu-link" data-link="link-1">
                  Link 1
                </a>
              </li>
              <li>
                <button className="menu-link" data-link="products">
                  Back to Products
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
