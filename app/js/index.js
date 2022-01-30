document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth < 1024) {
    document.addEventListener("click", (e) => {
      /* footer nav listeners */
      if (e.target.closest(".accordian_title")) {
        let accordian = e.target.closest(".accordian");
        let contentEl = accordian.querySelector(".accordian_content");

        //check on already toggled element and close them
        if (!contentEl.classList.contains("toggled")) {
          toggledAccordianContent = document.querySelector(
            ".accordian_content.toggled"
          );
          if (toggledAccordianContent) {
            const toggledAccordian =
              toggledAccordianContent.closest(".accordian");
            if (toggledAccordian) {
              accordianControls = toggledAccordian.querySelectorAll("button");

              accordianControls.forEach((element) => {
                element.classList.toggle("toggled");
              });
            }
            toggledAccordianContent.classList.toggle("toggled");
          }
        }
        if (contentEl) {
          accordianControls = accordian.querySelectorAll("button");

          accordianControls.forEach((element) => {
            element.classList.toggle("toggled");
          });
          contentEl.classList.toggle("toggled");
          contentEl.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
      ///////

      /**mobile search listeners */
      if (e.target.classList.contains("toggle-search__icon")) {
        let header = e.target.closest("header");
        closeSearch = document.querySelector(".close-search__btn");
        closeSearch.classList.toggle("show");
        openSearch = document.querySelector(".open-search__btn");
        openSearch.classList.toggle("show");
        searchBar = header.querySelector(".header__search");
        header.classList.toggle("active");

        searchBar.classList.toggle("show");
      }
      //////
    });
  } else if (window.innerWidth >= 1024) {
    const inputSearch = document.querySelector(".header__input");
    const header = document.querySelector(".header");
    inputSearch.addEventListener("focus", () => {
      header.classList.toggle("active");
    });
    inputSearch.addEventListener("blur", () => {
      header.classList.toggle("active");
    });
  }
});

/**sidebar listener */
const sidebarOpenBtn = document.querySelector("[data-open-sidebar]");
const sidebarCloseBtn = document.querySelector("[data-close-sidebar]");
const overflow = document.querySelector(".overflow");
const sidebar = document.querySelector(".sidebar");

const toggleSidebar = () => {
  const body = document.querySelector("body");
  body.classList.toggle("hideScroll");
  sidebar.classList.toggle("show");
  overflow.classList.toggle("show");
};
overflow.addEventListener("click", () => {
  toggleSidebar();
});
sidebarOpenBtn.addEventListener("click", () => {
  toggleSidebar();
});
sidebarCloseBtn.addEventListener("click", () => {
  toggleSidebar();
});
sidebar.addEventListener("click", (e) => {
  if (e.target.closest(".btn-prev")) {
    const currentNav = e.target.closest(".sidebar__nav");
    const prevNavID = currentNav.dataset.prevNav;

    const prevNav = document.getElementById(prevNavID);
    if (prevNav) {
      currentNav.classList.toggle("show");
      prevNav.classList.toggle("show");
    }
  }
  if (e.target.closest("[data-next-nav]")) {
    const currentNav = e.target.closest(".sidebar__nav");
    const nextNavID = e.target.closest("[data-next-nav]").dataset.nextNav;
    const nextNav = document.getElementById(nextNavID);
    if (nextNav) {
      currentNav.classList.toggle("show");
      nextNav.classList.toggle("show");
    }
  }
});
const sidebarNavigarton = {};
///////
