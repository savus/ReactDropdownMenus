import { DropdownMenu } from "./Components/DropdownMenu";
import { NavItem } from "./Components/NavItem";
import { Navbar } from "./Components/Navbar";
import "./css/index.css";

import React, { useState } from "react";

function App() {
  return (
    <>
      <Navbar>
        <NavItem icon="fa-solid fa-plus" />
        <NavItem icon="fa-solid fa-bell" />
        <NavItem icon="fa-brands fa-facebook-messenger" />

        <NavItem icon="fa-solid fa-caret-down">
          <DropdownMenu />
        </NavItem>
      </Navbar>
    </>
  );
}

export default App;
