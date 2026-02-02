const navItems = document.querySelectorAll(".nav-item");
const megas = document.querySelectorAll(".mega");
const userTrigger = document.querySelector(".user-trigger");
const userDropdown = document.querySelector(".user-dropdown");

navItems.forEach(item => {
  item.addEventListener("click", e => {
    const target = item.dataset.menu;

    megas.forEach(menu => {
      menu.style.display =
        menu.id === target && menu.style.display !== "block"
          ? "block"
          : "none";
    });

    userDropdown.style.display = "none";
    e.stopPropagation();
  });
});

userTrigger.addEventListener("click", e => {
  userDropdown.style.display =
    userDropdown.style.display === "block" ? "none" : "block";

  megas.forEach(menu => menu.style.display = "none");
  e.stopPropagation();
});

document.addEventListener("click", () => {
  megas.forEach(menu => menu.style.display = "none");
  userDropdown.style.display = "none";
});
