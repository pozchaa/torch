let globalWidth = window.innerWidth;
let swiperSpace = 16;
if (globalWidth <= 768) {
  swiperSpace = 8;
}

if (globalWidth <= 768) {
  var swiper = new Swiper('.swiper__home', {
    slidesPerView: 'auto',
    spaceBetween: swiperSpace,
  });
  const productNewUpdate = document.querySelector('.swiper');
  productNewUpdate.children[0].classList.remove('cards-list');
}

