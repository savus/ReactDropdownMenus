import { ReactNode, useState } from "react";

export const NavItem = ({
  icon,
  children,
}: {
  icon: string;
  children: ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        <i className={icon}></i>
      </a>
      {children}
    </li>
  );
};
