// Swiper 네비게이션 버튼, 페이지네이션 동적 생성 (HTML 수정 불필요)
function createSwiperControls() {
  const container = document.querySelector('.swiper-container');

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

createSwiperControls();

const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false, // 수동 조작시에도 자동 슬라이드 계속
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
