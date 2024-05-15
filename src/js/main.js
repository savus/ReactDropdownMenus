document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("click", (e) => {
    const target = e.target;
    const dataDropdownButton = "[data-dropdown-button]";
    const dataDropdown = "[data-dropdown]";
    const isDropdownButton = target.matches(dataDropdownButton);

    if (!isDropdownButton && target.closest(dataDropdown) != null) return;

    let currentDropdownMenu;

    if (isDropdownButton) {
      currentDropdownMenu = target.closest(dataDropdown);
      currentDropdownMenu.classList.toggle("active");
    }

    document.querySelectorAll(`${dataDropdown}.active`).forEach((dropdown) => {
      if (dropdown === currentDropdownMenu) return;

      dropdown.classList.remove("active");
    });

    const dataPracticeDropdown = "[data-practice-dropdown]";
    const dataPracticeDropdownButton = "[data-practice-dropdown-button]";
    const isPracticeDropdownButton = target.matches(dataPracticeDropdownButton);

    if (
      !isPracticeDropdownButton &&
      target.closest(dataPracticeDropdown) != null
    )
      return;

    let currentPracticeDropdownMenu;

    if (isPracticeDropdownButton) {
      currentPracticeDropdownMenu = target.closest(dataPracticeDropdown);
      currentPracticeDropdownMenu.classList.toggle("active");
    }

    document
      .querySelectorAll(`${dataPracticeDropdown}.active`)
      .forEach((dropdown) => {
        if (dropdown === currentPracticeDropdownMenu) return;
        dropdown.classList.remove("active");
      });
  });
});
