import { ReactNode, createContext, useContext, useState } from "react";
export type TActiveTabState = "none" | "react-dropdown";

type TActiveTabStateProvider = {
  activeTabState: TActiveTabState;
  setActiveTabState: (activeTabState: TActiveTabState) => void;
};

const ActiveTabStateContext = createContext({} as TActiveTabStateProvider);

export const ActiveTabStateProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeTabState, setActiveTabState] = useState<TActiveTabState>("none");
  return (
    <ActiveTabStateContext.Provider
      value={{ activeTabState, setActiveTabState }}
    >
      <div
        className="page-container"
        onClick={(e) => {
          const target = e.target;
          const isDropdownButton = target.matches(
            "[data-react-dropdown-button]"
          );
          const dropdownMenu = target.closest("[data-react-dropdown-menu]");
          if (!isDropdownButton && dropdownMenu !== null) return;
          if (activeTabState != "none") setActiveTabState("none");
        }}
      >
        {children}
      </div>
    </ActiveTabStateContext.Provider>
  );
};

export const useActiveTabState = () => useContext(ActiveTabStateContext);
