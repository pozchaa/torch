const body = document.querySelector('body');

const menu = document.querySelector('.menu');
const headerBurger = document.querySelector('.header__burger');
const menuWrap = document.querySelector('.menu__wrap');

const header = document.querySelector('header');

const footer = document.querySelector('footer');

const footerBody = document.querySelector('.footer__body');

const menuShippingBtn = document.querySelector('.menu__shipping-btn');
const menuShippingMore = document.querySelector('.menu__shipping_more');

const menuContactsBtn = document.querySelector('.menu__contacts-btn');
const menuContactsMore = document.querySelector('.menu__contacts_more');

const footerHomeBtn = document.querySelector('.footer__home-btn');

headerBurger.addEventListener('click', function (evt) {
  if (!headerBurger.classList.contains('menu__btn_active')) {
    headerBurger.classList.add('menu__btn_active');
    headerBurger.classList.add('header__burger_active');
    menu.style.left = '0';
    menu.style.visibility = 'visible';
    footer.style.background = '#FBFBFB';
    footer.style.position = 'fixed';
    footer.style.paddingTop = '1em';
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
  } else {
    headerBurger.classList.remove('menu__btn_active');
    headerBurger.classList.remove('header__burger_active');
    menu.style.left = '-1000px';
    footer.style.background = 'transparent';
    footer.style.paddingTop = '0em';
    footer.style.position = 'static';
    menu.style.visibility = 'hidden';
    body.style.height = 'auto';
    body.style.overflow = 'auto';
  }
});

menuShippingBtn.addEventListener('click', function () {
  menuShippingMore.classList.add('menu__shipping_more-active');
});
/////////////////////////
menuContactsBtn.addEventListener('click', function () {
  menuContactsMore.classList.add('menu__contacts_more-active');
});

footerHomeBtn.addEventListener('click', function () {
  if (menuShippingMore.classList.contains('menu__shipping_more-active')) {
    menuShippingMore.classList.remove('menu__shipping_more-active');
    menuWrap.style.animation = 'opacityAnimation 0.8s ease';
  } else if (menuContactsMore.classList.contains('menu__contacts_more-active')) {
    menuContactsMore.classList.remove('menu__contacts_more-active');
    menuWrap.style.animation = 'opacityAnimation 0.8s ease';
  }
});
