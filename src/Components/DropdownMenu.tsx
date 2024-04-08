import { DropdownItem } from "./DropdownItem";

export const DropdownMenu = () => {
  return (
    <ul>
      <DropdownItem leftIcon="fa-solid fa-user" rightIcon="">
        Profile
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-gear" rightIcon="">
        Settings
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-palette" rightIcon="">
        Gallery
      </DropdownItem>
      <DropdownItem leftIcon="fa-solid fa-backward" rightIcon="">
        Other
      </DropdownItem>
    </ul>
  );
};
