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
      if(window.innerWidth <= 992) {
        e.preventDefault();
        const isOpen = subMenu.classList.contains('open');
        subMenus.forEach(sm => sm.classList.remove('open'));
        if(!isOpen) subMenu.classList.add('open');
      }
    });
  });

  // Swiper 슬라이드 공통 초기화 함수
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

  // 모든 슬라이드에 대해 네비게이션 버튼 추가 및 초기화
  const swiperContainers = document.querySelectorAll('.swiper-container');
  swiperContainers.forEach(container => {
    // 네비게이션 버튼 추가
    const nextBtn = document.createElement('div');
    nextBtn.classList.add('swiper-button-next');
    container.appendChild(nextBtn);

    const prevBtn = document.createElement('div');
    prevBtn.classList.add('swiper-button-prev');
    container.appendChild(prevBtn);

    // 슬라이드 하단 캡션 텍스트 읽어오기
    const slides = container.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const altText = slide.querySelector('img')?.alt || '';
      // 캡션 요소가 이미 있으면 중복 추가 방지
      if (!slide.querySelector('.slide-caption')) {
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = altText;
        slide.appendChild(caption);
      }
    });

   

