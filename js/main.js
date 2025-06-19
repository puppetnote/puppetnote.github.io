// 메뉴바 토글 (햄버거 클릭 시)
function toggleMenu() {
  const menu = document.querySelector('.dropdown-menu');
  if (!menu) return;
  menu.classList.toggle('active');
}

// 서브메뉴 열기 (모바일용)
function setupSubmenuToggle() {
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

// 좌측 상단 로고 동적 생성 및 삽입
function addLogo() {
  const nav = document.querySelector('nav');
  if (!nav) return;
  if (nav.querySelector('.logo')) return; // 이미 있으면 패스

  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = '<a href="index.html" style="color:#fff; text-decoration:none;">현대인형극회</a>';
  nav.insertBefore(logo, nav.firstChild);
}

// Swiper 네비게이션 버튼, 페이지네이션 동적 생성
function createSwiperControls() {
  const container = document.querySelector('.swiper-container');
  if (!container) return;

  if (!container.querySelector('.swiper-button-next')) {
    const nextBtn = document.createElement('div');
    nextBtn.className = 'swiper-button-next';
    nextBtn.innerHTML = '&#10095;'; // ›
    container.appendChild(nextBtn);
  }
  if (!container.querySelector('.swiper-button-prev')) {
    const prevBtn = document.createElement('div');
    prevBtn.className = 'swiper-button-prev';
    prevBtn.innerHTML = '&#10094;'; // ‹
    container.appendChild(prevBtn);
  }
  if (!container.querySelector('.swiper-pagination')) {
    const pagination = document.createElement('div');
    pagination.className = 'swiper-pagination';
    container.appendChild(pagination);
  }
}

// Swiper 초기화
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

window.onload = () => {
  addLogo();
  setupSubmenuToggle();
  initSwiper();

  // 메뉴 토글 버튼 클릭 이벤트 연결
  const menuToggleBtn = document.querySelector('.menu-toggle');
  if (menuToggleBtn) {
    menuToggleBtn.addEventListener('click', toggleMenu);
  }
};
