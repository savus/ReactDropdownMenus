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
    const dataLink = target.dataset.link;
    const dataBackButton = target.dataset.backButton;
    const selector = `data-menu`;
    const sliderMenu = document.querySelector(`[${selector}=${dataLink}]`);

    if (target.classList.contains("menu-link"))
      setActive(sliderMenu, `[${selector}]`);
  });
});
