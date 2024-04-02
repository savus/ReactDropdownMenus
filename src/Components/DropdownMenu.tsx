import { ReactNode, useState } from "react";

export const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");

  const DropdownItem = ({
    children,
    leftIcon,
    rightIcon,
  }: {
    children: ReactNode;
    leftIcon: string;
    rightIcon: string;
  }) => {
    return (
      <a href="#" className="menu-item">
        {leftIcon !== "" && (
          <span className="icon-button left">
            <i className={`${leftIcon}`}></i>
          </span>
        )}
        {children}
        {rightIcon !== "" && (
          <span className="icon-button right">
            <i className={`${rightIcon}`}></i>
          </span>
        )}
      </a>
    );
  };

  return (
    <div className="dropdown">
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        My Profile
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-gear" rightIcon="">
        Settings
      </DropdownItem>
    </div>
  );
};
