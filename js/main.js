// 메뉴 토글 (모바일용)
const menuToggleBtn = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuToggleBtn.addEventListener('click', () => {
  dropdownMenu.classList.toggle('active');
});

// 키보드 접근성 보완: 포커스 시 서브메뉴 열림 유지
const menuLinks = document.querySelectorAll('.dropdown-menu li > a');

menuLinks.forEach(link => {
  link.addEventListener('focus', () => {
    closeAllSubmenus();
    const parentLi = link.parentElement;
    openSubmenu(parentLi);
  });
  link.addEventListener('blur', () => {
    setTimeout(() => {
      closeAllSubmenus();
    }, 200);
  });
});

function openSubmenu(li) {
  const submenu = li.querySelector('ul');
  if (submenu) submenu.style.display = 'block';
}

function closeAllSubmenus() {
  document.querySelectorAll('.dropdown-menu ul').forEach(ul => {
    ul.style.display = 'none';
  });
}

// Swiper 슬라이드 기본 초기화 (모든 슬라이드 페이지에 공통)
const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: 'fade',
  fadeEffect: { crossFade: true },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
