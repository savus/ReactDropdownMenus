document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const dataDropdown = "[data-dropdown]";
    const dataDropdownButton = "[data-dropdown-button]";
    const dataDropdownMenu = "[data-dropdown-menu]";

    const isDropdownButton = target.matches(dataDropdownButton);
    const currentDropdownContainer = target.closest(dataDropdown);
    const currentDropdownMenu = target.closest(dataDropdownMenu);

    const setActive = (element, selector) => {
      const activeElement = document.querySelector(`${selector}.active`);
      if (activeElement !== null) activeElement.classList.remove("active");
      element.classList.add("active");
    };

    if (!isDropdownButton && currentDropdownMenu !== null) return;

    if (isDropdownButton) {
      currentDropdownContainer.classList.toggle("active");
    }

    setActive(currentDropdownContainer, dataDropdown);
  });
});
