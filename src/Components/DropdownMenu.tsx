import { ReactNode } from "react";

export const DropdownMenu = () => {
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
          <span className="icon-button">
            <i className={leftIcon}></i>
          </span>
        )}

        {children}
        <span>
          <i className={rightIcon}></i>
        </span>
      </a>
    );
  };
  return (
    <div className="dropdown">
      <DropdownItem leftIcon="" rightIcon="">
        My Profile
      </DropdownItem>
    </div>
  );
};
