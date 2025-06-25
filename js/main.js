document.addEventListener('DOMContentLoaded', function() {
  // 메뉴 토글 기능
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
    mainMenu.classList.toggle('active');
  });

  // 모바일 서브메뉴 아코디언 효과
  const subMenus = document.querySelectorAll('#main-menu li > ul');
  subMenus.forEach(subMenu => {
    const parentLink = subMenu.parentElement.querySelector('a');
    parentLink.addEventListener('click', (e) => {
      if (window.innerWidth <= 992) {
        e.preventDefault();
        const isOpen = subMenu.classList.contains('open');
        subMenus.forEach(sm => sm.classList.remove('open'));
        if (!isOpen) subMenu.classList.add('open');
      }
    });
  });

  // 슬라이드 초기화 함수
  function initSwiper(selector) {
    return new Swiper(selector, {
      loop: true,
      speed: 600,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: selector + ' .swiper-button-next',
        prevEl: selector + ' .swiper-button-prev',
      },
    });
  }

  // 슬라이드 설정 적용
  const swiperContainers = document.querySelectorAll('.swiper-container');
  swiperContainers.forEach(container => {
    // 버튼 생성
    const nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    container.appendChild(nextBtn);

    const prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    container.appendChild(prevBtn);

    // 캡션 생성
    const slides = container.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const img = slide.querySelector('img');
      const altText = img?.alt || '';
      if (!slide.querySelector('.swiper-slide-caption')) {
        const caption = document.createElement('div');
        caption.className = 'swiper-slide-caption';
        caption.textContent = altText;
        slide.appendChild(caption);
      }
    });

    // 슬라이더 초기화
    initSwiper('#' + container.id);
  });
});



