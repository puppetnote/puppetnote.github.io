// js/menu-loader.js

// 메뉴 로더: menu.html 내용 불러와서 삽입
fetch("menu.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("main-menu");

    if (toggle && menu) {
      // 메뉴 토글 기능
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("active");
      });
    }

    // 최상위 드롭다운 메뉴 접근성 및 마우스 호버 효과
    const topLevelLinks = document.querySelectorAll("#main-menu > li > a[aria-haspopup='true']");
    topLevelLinks.forEach(link => {
      const submenu = link.nextElementSibling;
      if (submenu) {
        link.addEventListener("mouseenter", () => submenu.classList.add("show"));
        link.addEventListener("focus", () => submenu.classList.add("show"));
        link.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));
        link.addEventListener("blur", () => submenu.classList.remove("show"));
      }
    });

    // 2차 서브메뉴 (예: 해외공연 안의 각 지역 메뉴)
    const nestedLinks = document.querySelectorAll("#main-menu li ul li a[aria-haspopup='true']");
    nestedLinks.forEach(link => {
      const submenu = link.nextElementSibling;
      if (submenu) {
        link.addEventListener("mouseenter", () => submenu.classList.add("show"));
        link.addEventListener("focus", () => submenu.classList.add("show"));
        link.parentElement.addEventListener("mouseleave", () => submenu.classList.remove("show"));
        link.addEventListener("blur", () => submenu.classList.remove("show"));
      }
    });
  })
  .catch(error => {
    console.error("메뉴 로드 실패:", error);
  });
