document.addEventListener('DOMContentLoaded', () => {
  fetch('menu.html')
    .then(response => {
      if (!response.ok) throw new Error('메뉴 파일을 불러오는 데 실패했습니다.');
      return response.text();
    })
    .then(html => {
      const navPlaceholder = document.getElementById('nav-placeholder');
      if (navPlaceholder) {
        navPlaceholder.innerHTML = html;

        // 메뉴 토글 및 드롭다운 이벤트 활성화
        const menuToggle = navPlaceholder.querySelector('.menu-toggle');
        const dropdownMenu = navPlaceholder.querySelector('.dropdown-menu');

        if (menuToggle && dropdownMenu) {
          menuToggle.addEventListener('click', () => {
            dropdownMenu.classList.toggle('active');
            // aria-expanded 속성 토글
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', String(!expanded));
          });
        }

        // 드롭다운 하위 메뉴 토글 (접근성 및 모바일 대응)
        const submenuParents = navPlaceholder.querySelectorAll('.dropdown-menu li > a[aria-haspopup="true"]');

        submenuParents.forEach(parentLink => {
          parentLink.addEventListener('click', (e) => {
            // 모바일 또는 터치 환경에서 클릭 시 하위 메뉴 토글
            e.preventDefault();
            const submenu = parentLink.nextElementSibling;
            if (!submenu) return;

            const isVisible = submenu.style.display === 'block';

            // 모든 서브메뉴 닫기 (동시 열림 방지)
            navPlaceholder.querySelectorAll('.dropdown-menu ul').forEach(ul => {
              ul.style.display = 'none';
              ul.parentElement.querySelector('a[aria-expanded]').setAttribute('aria-expanded', 'false');
            });

            if (!isVisible) {
              submenu.style.display = 'block';
              parentLink.setAttribute('aria-expanded', 'true');
            } else {
              submenu.style.display = 'none';
              parentLink.setAttribute('aria-expanded', 'false');
            }
          });
        });

        // 초기에는 모든 하위 메뉴 닫기
        navPlaceholder.querySelectorAll('.dropdown-menu ul').forEach(ul => {
          ul.style.display = 'none';
        });
      }
    })
    .catch(error => {
      console.error('메뉴 로딩 중 오류:', error);
    });
});
