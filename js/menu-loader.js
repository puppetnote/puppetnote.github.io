// js/menu-loader.js

// 메뉴 로더: menu.html 내용 불러와서 삽입
fetch("menu.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("main-menu");

    // 메뉴 토글 기능
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("show");
      });
    }

    // 1차 서브메뉴 (예: 소개, 공연, 아카데미 등)
    const topLevelItems = document.querySelectorAll("#main-menu > li > a[aria-haspopup='true']");
    topLevelItems.forEach((item) => {
      const submenu = item.nextElementSibling;
      if (submenu) {
        item.addEventListener("mouseenter", () => submenu.classList.add("show"));
        item.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));
        item.addEventListener("focus", () => submenu.classList.add("show"));
        item.addEventListener("blur", () => submenu.classList.remove("show"));
      }
    });

    // 2차 서브메뉴 (예: 해외공연 아래 국가들)
    const nestedMenus = document.querySelectorAll("#main-menu li ul li a[aria-haspopup='true']");
    nestedMenus.forEach((item) => {
      const submenu = item.nextElementSibling;
      if (submenu) {
        item.addEventListener("mouseenter", () => submenu.classList.add("show"));
        item.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));
      }
    });
  });

