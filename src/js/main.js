document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const dataDropdownButton = "[data-dropdown-button]";
    const dataDropdown = "[data-dropdown]";
    const dataDropdownMenu = "[data-dropdown-menu]";
    const isDropdownButton = target.matches(dataDropdownButton);
    const currentDropdownMenu = target.closest(dataDropdown);

    const setActive = (element, selector) => {
      const activeElement = document.querySelector(`${selector}.active`);
      if (activeElement !== null) activeElement.classList.remove("active");
      element.classList.add("active");
    };

    if (!isDropdownButton && target.closest(dataDropdownMenu) !== null) return;

    if (isDropdownButton) {
      currentDropdownMenu.classList.toggle("active");
    }

    document.querySelectorAll(`${dataDropdown}.active`).forEach((dropdown) => {
      if (dropdown === currentDropdownMenu) return;
      dropdown.classList.remove("active");
    });
  });
});
