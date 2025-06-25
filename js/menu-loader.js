// js/menu-loader.js

// 메뉴 로더: menu.html 내용 불러와서 삽입
fetch("menu.html")
  .then((res) => res.text())
  .then((data) => {
    document.getElementById("nav-placeholder").innerHTML = data;

    const toggle = document.querySelector(".menu-toggle");
    const menu = document.getElementById("main-menu");

    // 메뉴 토글
    if (toggle && menu) {
      toggle.addEventListener("click", () => {
        const expanded = toggle.getAttribute("aria-expanded") === "true";
        toggle.setAttribute("aria-expanded", !expanded);
        menu.classList.toggle("active");
      });
    }

    // 최상위 드롭다운 (소개, 공연, 아카데미, 갤러리)
    const topLevelLinks = document.querySelectorAll("#main-menu > li > a[aria-haspopup='true']");
    topLevelLinks.forEach(link => {
      const submenu = link.nextElementSibling;

      if (submenu) {
        // 마우스 진입 시
        link.addEventListener("mouseenter", () => {
          submenu.classList.add("show");
          link.setAttribute("aria-expanded", "true");
        });

        // 마우스 벗어날 때
        link.parentElement.addEventListener("mouseleave", () => {
          submenu.classList.remove("show");
          link.setAttribute("aria-expanded", "false");
        });

        // 키보드 포커스 접근성
        link.addEventListener("focus", () => {
          submenu.classList.add("show");
          link.setAttribute("aria-expanded", "true");
        });

        link.addEventListener("blur", () => {
          submenu.classList.remove("show");
          link.setAttribute("aria-expanded", "false");
        });
      }
    });

    // 2차 드롭다운 (갤러리 > 해외공연 등)
    const nestedLinks = document.querySelectorAll("#main-menu li ul li a[aria-haspopup='true']");
    nestedLinks.forEach(link => {
      const submenu = link.nextElementSibling;

      if (submenu) {
        link.addEventListener("mouseenter", () => {
          submenu.classList.add("show");
          link.setAttribute("aria-expanded", "true");
        });

        link.parentElement.addEventListener("mouseleave", () => {
          submenu.classList.remove("show");
          link.setAttribute("aria-expanded", "false");
        });

        link.addEventListener("focus", () => {
          submenu.classList.add("show");
          link.setAttribute("aria-expanded", "true");
        });

        link.addEventListener("blur", () => {
          submenu.classList.remove("show");
          link.setAttribute("aria-expanded", "false");
        });
      }
    });
  })
  .catch(error => {
    console.error("메뉴 로드 실패:", error);
  });
