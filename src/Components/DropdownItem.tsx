import { ReactNode } from "react";

export const DropdownItem = ({
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
      <li className="menu-item">
        {leftIcon !== "" && <i className={leftIcon}></i>}
        <a href="#" className="menu-item">
          {children}
        </a>
        {rightIcon !== "" && <i className={rightIcon}></i>}
      </li>
    </>
  );
};
