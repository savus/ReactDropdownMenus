document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const isDropdownButton = target.matches("[data-dropdown-button]");
    const currentDropdownMenu = target.closest("[data-dropdown]");

    if (!isDropdownButton && target.closest("[data-dropdown-menu]") !== null)
      return;

    if (isDropdownButton) {
      currentDropdownMenu.classList.toggle("active");
    }

    document.querySelectorAll("[data-dropdown].active").forEach((dropdown) => {
      if (dropdown === currentDropdownMenu) return;
      dropdown.classList.remove("active");
    });
  });
});
