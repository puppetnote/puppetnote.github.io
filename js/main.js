
document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  toggleBtn.addEventListener('click', () => {
    const expanded = toggleBtn.getAttribute('aria-expanded') === 'true' || false;
    toggleBtn.setAttribute('aria-expanded', !expanded);
    mainMenu.classList.toggle('active');
  });

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

  const swiperContainers = document.querySelectorAll('.swiper-container');
  swiperContainers.forEach(container => {
    const nextBtn = document.createElement('div');
    nextBtn.classList.add('swiper-button-next');
    container.appendChild(nextBtn);

    const prevBtn = document.createElement('div');
    prevBtn.classList.add('swiper-button-prev');
    container.appendChild(prevBtn);

    const slides = container.querySelectorAll('.swiper-slide');
    slides.forEach(slide => {
      const altText = slide.querySelector('img')?.alt || '';
      if (!slide.querySelector('.slide-caption')) {
        const caption = document.createElement('div');
        caption.className = 'slide-caption';
        caption.textContent = altText;
        slide.appendChild(caption);
      }
    });

    initSwiper('.swiper-container');
  });
});


