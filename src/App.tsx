import { MenuSlider } from "./Components/MenuSlider";
import { PracticeHeader } from "./Components/PracticeHeader";
import "./css/index.css";
import "./css/glassmorphism-menu.css";

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
      <section className="glassmorphism-menu">
        <div className="glassmorphism-container">
          <header className="header">
            <a href="#" className="logo">
              Logo
            </a>
            <nav className="navbar">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Portfolio</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </nav>
          </header>
        </div>
      </section>
    </>
  );
}

export default App;
