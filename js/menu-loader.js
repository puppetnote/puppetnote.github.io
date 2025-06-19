document.addEventListener('DOMContentLoaded', function() {
  // 외부 메뉴 불러오기
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      // 메뉴 토글 버튼 활성화
      const toggleBtn = document.querySelector('.menu-toggle');
      const mainMenu = document.getElementById('main-menu');

      toggleBtn.addEventListener('click', () => {
        const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
        toggleBtn.setAttribute('aria-expanded', !expanded);
        mainMenu.classList.toggle('active');
      });

      // 서브메뉴 아코디언 기능 (모바일)
      const subMenus = document.querySelectorAll('#main-menu li > ul');
      subMenus.forEach(subMenu => {
        const parentLink = subMenu.parentElement.querySelector('a');
        parentLink.addEventListener('click', (e) => {
          // 모바일에서만 작동
          if(window.innerWidth <= 992) {
            e.preventDefault();
            const isOpen = subMenu.classList.contains('open');
            subMenus.forEach(sm => sm.classList.remove('open'));
            if(!isOpen) {
              subMenu.classList.add('open');
            }
          }
        });
      });
    });
});
