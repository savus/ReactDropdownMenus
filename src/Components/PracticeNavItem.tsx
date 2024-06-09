import { ReactNode } from "react";

export const PracticeNavItem = ({
  buttonText,
  children,
}: {
  buttonText: string;
  children: ReactNode;
}) => {
  return (
    <li className="nav-item">
      <div className="dropdown " data-dropdown>
        <a href="#" className="dropdown-button" data-dropdown-button>
          {buttonText}
        </a>
        {children}
      </div>
    </li>
  );
};
