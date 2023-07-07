let globalWidth = window.innerWidth
let swiperSpace = 16
if (globalWidth <= 768) {
  swiperSpace = 8
}

if (document.querySelector('.swiper__product')) {
  var thumbsSwiper = new Swiper('.slider__thumbs', {
    slidesPerView: 4,
    spaceBetween: 8,
    freeMode: true,
    watchSlidesProgress: true
  })

  var swiperProduct = new Swiper('.swiper__product', {
    slidesPerView: 1,
    spaceBetween: swiperSpace,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    thumbs: {
      swiper: thumbsSwiper
    }
  })
}

// const productNewUpdate = document.querySelector('.swiperProduct')
// productNewUpdate.children[0].classList.remove('cards-list')
