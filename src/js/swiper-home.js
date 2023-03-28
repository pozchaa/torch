let globalWidth = window.innerWidth
let swiperSpace = 16
if (globalWidth <= 768) {
  swiperSpace = 8
}

if (globalWidth <= 768 && document.querySelector('.swiper__home')) {
  var swiperHome = new Swiper('.swiper__home', {
    slidesPerView: 'auto',
    spaceBetween: swiperSpace
  })
  const productNewUpdate = document.querySelector('.swiper')
  productNewUpdate.children[0].classList.remove('cards-list')
}

if (globalWidth <= 768 && document.querySelector('.swiper__recommend')) {
  var swiper2 = new Swiper('.swiper__recommend', {
    slidesPerView: 'auto',
    spaceBetween: swiperSpace
  })
  const productNewUpdate = document.querySelector('.swiper2')
  productNewUpdate.children[0].classList.remove('cards-list')
}

if (globalWidth <= 768 && document.querySelector('.swiper__sold')) {
  var swiper3 = new Swiper('.swiper__sold', {
    slidesPerView: 'auto',
    spaceBetween: swiperSpace
  })
  const productNewUpdate = document.querySelector('.swiper3')
  productNewUpdate.children[0].classList.remove('cards-list')
}

