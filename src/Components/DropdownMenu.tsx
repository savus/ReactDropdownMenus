import { ReactNode } from "react";

export const DropdownMenu = () => {
  const DropdownItem = ({
    leftIcon,
    rightIcon,
    children,
  }: {
    leftIcon: string;
    rightIcon: string;
    children: ReactNode;
  }) => {
    return (
      <>
        {leftIcon !== "" && <i className={leftIcon}></i>}
        <a href="#" className="menu-item">
          {children}
        </a>
        {rightIcon !== "" && <i className={rightIcon}></i>}
      </>
    );
  };
  return (
    <div className="dropdown">
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        Profile
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        Profile
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        Profile
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        Profile
      </DropdownItem>
    </div>
  );
};
