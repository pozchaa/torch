const body = document.querySelector('body');

const menu = document.querySelector('.menu');
const headerBurger = document.querySelector('.header__burger');
const menuWrap = document.querySelector('.menu__wrap');

const header = document.querySelector('header');

const footer = document.querySelector('footer');
// const footerMenu = footer.cloneNode(true);
const footerBody = document.querySelector('.footer__body');

const menuShippingBtn = document.querySelector('.menu__shipping-btn');
const menuShippingMore = document.querySelector('.menu__shipping_more');

const menuContactsBtn = document.querySelector('.menu__contacts-btn');
const menuContactsMore = document.querySelector('.menu__contacts_more');

const footerHomeBtn = document.querySelector('.footer__home-btn');

headerBurger.addEventListener('click', function () {
  if (!headerBurger.classList.contains('menu__btn_active')) {
    headerBurger.classList.add('menu__btn_active');
    menu.style.left = '0';
    header.style.position = 'fixed';
    menu.appendChild(footer);
    footer.style.background = '#FBFBFB';
    footer.style.paddingTop = '1em';
    body.classList.add('noscroll');
  } else {
    headerBurger.classList.remove('menu__btn_active');
    menu.style.left = '-1000px';
    header.style.position = 'static';
    footer.style.background = 'transparent';
    footer.style.paddingTop = '0em';
    body.classList.remove('noscroll');
    menu.appendChild(footer);
    body.appendChild(footer);
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
