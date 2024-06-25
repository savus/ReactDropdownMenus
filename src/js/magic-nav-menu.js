document.addEventListener("DOMContentLoaded", () => {
  const magicNavList = document.querySelectorAll(
    ".magic-navigation-menu .list"
  );
  try {
    if (magicNavList.length === 0) throw "List is empty";
  } catch (e) {
    console.log(e);
  }

  function activeLink() {
    magicNavList.forEach((item) => {
      item.classList.remove("active");
      this.classList.add("active");
    });
  }

  magicNavList.forEach((item) => {
    item.addEventListener("click", activeLink);
  });
});
