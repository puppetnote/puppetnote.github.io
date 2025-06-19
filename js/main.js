// 외부 메뉴 HTML을 로드하고, 토글 및 키보드 접근성 지원

function loadMenu() {
  fetch('menu.html')
    .then(res => {
      if (!res.ok) throw new Error('메뉴 로드 실패');
      return res.text();
    })
    .then(html => {
      document.getElementById('nav-placeholder').innerHTML = html;
      initMenuEvents();
    })
    .catch(console.error);
}

function initMenuEvents() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mainMenu = document.querySelector('.dropdown-menu');

  // 메뉴 토글(햄버거)
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    mainMenu.classList.toggle('active');
  });

  // 서브메뉴 접근성 및 키보드 지원 (TAB, ESC, 방향키)
  const menuLinks = mainMenu.querySelectorAll('a[aria-haspopup="true"]');

  menuLinks.forEach(link => {
    link.addEventListener('keydown', (e) => {
      const submenu = link.nextElementSibling;
      if (!submenu) return;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          submenu.querySelector('a').focus();
          break;
        case 'ArrowUp':
          e.preventDefault();
          const items = submenu.querySelectorAll('a');
          items[items.length - 1].focus();
          break;
        case 'Escape':
          e.preventDefault();
          link.focus();
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          // 토글 서브메뉴 열기/닫기
          const isOpen = link.getAttribute('aria-expanded') === 'true';
          link.setAttribute('aria-expanded', String(!isOpen));
          submenu.style.display = isOpen ? 'none' : 'block';
          break;
      }
    });

    // 마우스 오버시 aria-expanded 업데이트
    link.addEventListener('mouseover', () => {
      link.setAttribute('aria-expanded', 'true');
    });
    link.addEventListener('mouseout', () => {
      link.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', loadMenu);
