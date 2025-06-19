document.addEventListener('DOMContentLoaded', () => {
  // 메뉴 불러오기
  fetch('menu.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;
      setupMenuToggle();
      setupAriaAttributes();
    })
    .catch(e => console.error('메뉴 로드 실패:', e));

  // 슬라이드 초기화 (모든 swiper-container)
  const initSwiper = () => {
    document.querySelectorAll('.swiper-container').forEach(swiperEl => {
      // 버튼이 없으면 자동 생성 (앞, 뒤)
      if (!swiperEl.querySelector('.swiper-button-next')) {
        const nextBtn = document.createElement('div');
        nextBtn.classList.add('swiper-button-next');
        swiperEl.appendChild(nextBtn);
      }
      if (!swiperEl.querySelector('.swiper-button-prev')) {
        const prevBtn = document.createElement('div');
        prevBtn.classList.add('swiper-button-prev');
        swiperEl.appendChild(prevBtn);
      }

      new Swiper(swiperEl, {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: swiperEl.querySelector('.swiper-button-next'),
          prevEl: swiperEl.querySelector('.swiper-button-prev'),
        },
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 800,
      });
    });
  };

  initSwiper();

  // 메뉴 토글 버튼 동작
  function setupMenuToggle() {
    const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.dropdown-menu');
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', String(!expanded));
      menu.classList.toggle('active');
    });
  }

  // aria 속성 접근성 보강 (필요시 추가)
  function setupAriaAttributes() {
    const menuLinks = document.querySelectorAll('#main-menu > li > a');
    menuLinks.forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();
        const expanded = link.getAttribute('aria-expanded') === 'true';
        link.setAttribute('aria-expanded', String(!expanded));
        const submenu = link.nextElementSibling;
        if (submenu) submenu.classList.toggle('active');
      });
    });
  }
});

