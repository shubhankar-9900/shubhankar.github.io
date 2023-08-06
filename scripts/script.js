window.onload = () => {
  const nav = document.querySelector(".navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    var currScrollY = window.scrollY;

    if (lastScrollY < currScrollY) {
      nav.classList.add("hidden");
    } else {
      nav.classList.remove("hidden");
    }

    if (currScrollY === 0) {
      nav.classList.add("at-top");
      nav.classList.remove("scrolled");
    } else {
      nav.classList.add("scrolled");
      nav.classList.remove("at-top");
    }

    lastScrollY = currScrollY;
  });

  const menu_btn = document.querySelector(".hamburger");
  const mobile_menu = document.querySelector(".mobile-nav");

  menu_btn.addEventListener("click", function () {
    menu_btn.classList.toggle("is-active");
    mobile_menu.classList.toggle("is-active");
    nav.classList.toggle("at-top");
    document.body.classList.toggle("no-scroll");
  });

  const navItems = document.querySelectorAll(".navItem");
  navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
      document.body.classList.remove("no-scroll");
      menu_btn.classList.remove("is-active");
      mobile_menu.classList.remove("is-active");
    });
  });
};
