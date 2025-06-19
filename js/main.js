document.addEventListener("DOMContentLoaded", function() {
  fetch('menu.html')
    .then(response => {
      if (!response.ok) throw new Error('메뉴 파일 불러오기 실패');
      return response.text();
    })
    .then(data => {
      document.getElementById('nav-placeholder').innerHTML = data;

      initMenu();
      initSwiper();
    })
    .catch(error => {
      console.error(error);
    });

  function initMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if(menuToggle && dropdownMenu) {
      menuToggle.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
      });
    }

    const items = document.querySelectorAll('.dropdown-menu > li');
    items.forEach(item => {
      item.addEventListener('click', e => {
        if(window.innerWidth <= 768) {
          e.stopPropagation();
          items.forEach(i => {
            if(i !== item) i.classList.remove('active');
          });
          item.classList.toggle('active');
        }
      });
    });
  }

  function createSwiperControls() {
    const container = document.querySelector('.swiper-container');
    if (!container) return;

    if (!container.querySelector('.swiper-button-next')) {
      const nextBtn = document.createElement('div');
      nextBtn.className = 'swiper-button-next';
      nextBtn.innerHTML = '&#10095;';
      container.appendChild(nextBtn);
    }
    if (!container.querySelector('.swiper-button-prev')) {
      const prevBtn = document.createElement('div');
      prevBtn.className = 'swiper-button-prev';
      prevBtn.innerHTML = '&#10094;';
      container.appendChild(prevBtn);
    }
    if (!container.querySelector('.swiper-pagination')) {
      const pagination = document.createElement('div');
      pagination.className = 'swiper-pagination';
      container.appendChild(pagination);
    }
  }

  function initSwiper() {
    createSwiperControls();

    new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
});
