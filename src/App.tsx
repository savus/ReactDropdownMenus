import { GlassmorphicMenu } from "./Components/GlassmorphicMenu";
import { MenuSlider } from "./Components/MenuSlider";
import { PracticeHeader } from "./Components/PracticeHeader";
import "./css/index.css";
import "./css/magic-nav-menu.css";

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
      <MenuSlider />
      <GlassmorphicMenu />
      <section className="magic-navigation-menu">
        <div className="navigation">
          <ul>
            <li className="list active">
              <a href="#">
                <span className="icon">
                  <i className="fa-solid fa-house"></i>
                </span>
                <span className="text">Home</span>
                <span className="circle"></span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <i className="fa-solid fa-user"></i>
                </span>
                <span className="text">Profile</span>
                <span className="circle"></span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <i className="fa-solid fa-camera"></i>
                </span>
                <span className="text">Photos</span>
                <span className="circle"></span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </span>
                <span className="text">Message</span>
                <span className="circle"></span>
              </a>
            </li>
            <li className="list">
              <a href="#">
                <span className="icon">
                  <i className="fa-solid fa-gear"></i>
                </span>
                <span className="text">Settings</span>
                <span className="circle"></span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </section>
    </>
  );
}

export default App;
