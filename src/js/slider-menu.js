document.addEventListener("DOMContentLoaded", () => {
  const menuSliderContainerClass = ".menu-slider-container";

  const menuSlider = document.querySelector(menuSliderContainerClass);

  if (!menuSlider) throw new Error("could not find menu-slider-container");

  const setActive = (element, selector) => {
    const activeElement = document.querySelector(`${selector}.active`);
    if (activeElement !== null) {
      activeElement.classList.remove("active");
    }

    element.classList.add("active");
  };

  menuSlider.addEventListener("click", (e) => {
    const target = e.target;
    if (target.classList.contains("menu-link")) {
      const dataLink = target.dataset.link;
      const sliderMenu = document.querySelector(`[data-menu="${dataLink}"]`);
      setActive(sliderMenu, `[data-menu="${dataLink}"]`);
    }

    if (target.classList.contains("back-button")) {
      const dataBackButton = target.dataset.backButton;
      const sliderMenu = document.querySelector(
        `[data-menu="${dataBackButton}"]`
      );
      setActive(sliderMenu, `[data-menu="${dataBackButton}"]`);
    }
  });
});
