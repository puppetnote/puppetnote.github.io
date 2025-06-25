document.addEventListener('DOMContentLoaded', function () {
  // 메뉴 토글
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (toggleBtn && mainMenu) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      mainMenu.classList.toggle('active');
    });
  }

  // 모바일 아코디언 메뉴
  const subMenus = document.querySelectorAll('#main-menu li > ul');
  subMenus.forEach((subMenu) => {
    const parentLink = subMenu.parentElement.querySelector('a');
    parentLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const isOpen = subMenu.classList.contains('open');
        subMenus.forEach((sm) => sm.classList.remove('open'));
        if (!isOpen) subMenu.classList.add('open');
      }
    });
  });

  // 슬라이드 초기화
  function initSwiper(containerSelector) {
    return new Swiper(containerSelector, {
      loop: true,
      speed: 600,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: containerSelector + ' .swiper-button-next',
        prevEl: containerSelector + ' .swiper-button-prev',
      },
    });
  }

  // 모든 swiper-container에 대해 자동 적용
  const swiperContainers = document.querySelectorAll('.swiper-container');
  swiperContainers.forEach((container, index) => {
    // ID 없으면 자동으로 부여
    if (!container.id) {
      container.id = 'auto-swiper-' + index;
    }

    const selector = '#' + container.id;

    // 버튼 없으면 자동 생성
    if (!container.querySelector('.swiper-button-next')) {
      const nextBtn = document.createElement('div');
      nextBtn.className = 'swiper-button-next';
      container.appendChild(nextBtn);
    }

    if (!container.querySelector('.swiper-button-prev')) {
      const prevBtn = document.createElement('div');
      prevBtn.className = 'swiper-button-prev';
      container.appendChild(prevBtn);
    }

    // ✅ 캡션 생성 제거됨 (슬라이드 텍스트 설명 비활성화)

    initSwiper(selector);
  });
});
