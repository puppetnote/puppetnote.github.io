document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  if (toggleBtn && mainMenu) {
    toggleBtn.addEventListener('click', () => {
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
      mainMenu.classList.toggle('active');
    });
  }

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

  function initSwiper(container) {
    return new Swiper(container, {
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
        nextEl: container + ' .swiper-button-next',
        prevEl: container + ' .swiper-button-prev',
      },
    });
  }

  const swiperContainers = document.querySelectorAll('.swiper-container');
  swiperContainers.forEach((container, index) => {
    // 고유 ID가 없으면 자동 생성
    if (!container.id) {
      container.id = `swiper-${index}`;
    }

    const nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    container.appendChild(nextBtn);

    const prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    container.appendChild(prevBtn);

    const slides = container.querySelectorAll('.swiper-slide');
    slides.forEach((slide) => {
      const img = slide.querySelector('img');
      const altText = img?.alt || '';
      if (!slide.querySelector('.swiper-slide-caption')) {
        const caption = document.createElement('div');
        caption.className = 'swiper-slide-caption';
        caption.textContent = altText;
        slide.appendChild(caption);
      }
    });

    initSwiper('#' + container.id);
  });
});



