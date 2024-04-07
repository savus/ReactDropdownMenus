import { ReactNode } from "react";

export const DropdownMenu = ({
  children,
  menuClass,
}: {
  children: ReactNode;
  menuClass: string;
}) => {
  return (
    <div className="dropdown">
      <ul className={`${menuClass}`}>{children}</ul>
    </div>
  );
};
