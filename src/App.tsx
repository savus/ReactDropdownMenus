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
      <section className="glassmorphism-menu">Glassmorphism</section>
    </>
  );
}

export default App;
