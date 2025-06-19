// js/main.js
document.addEventListener('DOMContentLoaded', () => {
  // 메뉴 토글
  const menuToggle = document.querySelector('.menu-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener('click', () => {
      dropdownMenu.classList.toggle('active');
      const expanded = dropdownMenu.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded);
    });
  }

  // Swiper 슬라이드 초기화
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: 'fade',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
});

