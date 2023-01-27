let globalWidth = window.innerWidth;

if (globalWidth <= 768) {
  var swiper = new Swiper('.swiper__home', {
    slidesPerView: 'auto',
    spaceBetween: 16,
  });
  console.log(globalWidth);
}
