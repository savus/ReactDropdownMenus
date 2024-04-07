import { ReactNode } from "react";

export const DropdownMenu = ({ children }: { children: ReactNode }) => {
  return (
    <div className="dropdown">
      <ul>{children}</ul>
    </div>
  );
};
