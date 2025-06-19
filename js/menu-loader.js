// js/menu-loader.js
document.addEventListener('DOMContentLoaded', () => {
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // 메뉴 토글 버튼 작동 추가
      const menuToggle = document.querySelector('.menu-toggle');
      const dropdownMenu = document.querySelector('.dropdown-menu');

      if (menuToggle && dropdownMenu) {
        menuToggle.addEventListener('click', () => {
          dropdownMenu.classList.toggle('active');
          const expanded = dropdownMenu.classList.contains('active');
          menuToggle.setAttribute('aria-expanded', expanded);
        });
      }

      // 서브메뉴 열기 닫기 (접근성 및 모바일 대응)
      const menuItems = document.querySelectorAll('.dropdown-menu > li > a[aria-haspopup="true"]');
      menuItems.forEach(item => {
        item.addEventListener('click', e => {
          e.preventDefault();
          const submenu = item.nextElementSibling;
          if (!submenu) return;
          const isVisible = submenu.style.display === 'block';
          submenu.style.display = isVisible ? 'none' : 'block';
          item.setAttribute('aria-expanded', !isVisible);
        });
      });
    })
    .catch(err => {
      console.error('메뉴 로딩 실패:', err);
    });
});
