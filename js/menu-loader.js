// js/menu-loader.js

// 메뉴 로더: menu.html 내용 불러와서 삽입
fetch("menu.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;

    // 드롭다운 메뉴 토글 기능 구현
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("main-menu");

    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", !expanded);
      menu.classList.toggle("show");
    });

    // 서브메뉴 호버 효과 및 키보드 접근성
    const topLevelItems = document.querySelectorAll("#main-menu > li > a[aria-haspopup='true']");

    topLevelItems.forEach((item) => {
      const submenu = item.nextElementSibling;
      item.addEventListener("mouseenter", () => submenu.classList.add("show"));
      item.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));

      item.addEventListener("focus", () => submenu.classList.add("show"));
      item.addEventListener("blur", () => submenu.classList.remove("show"));
    });

    // 모든 서브 서브메뉴도 동일하게 적용 (예: 해외공연)
    const nestedMenus = document.querySelectorAll("#main-menu li ul li a[aria-haspopup='true']");
    nestedMenus.forEach((item) => {
      const submenu = item.nextElementSibling;
      item.addEventListener("mouseenter", () => submenu.classList.add("show"));
      item.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));
    });
  });
