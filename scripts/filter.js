const filterCategoryBtns = document.querySelectorAll('.filter__category-btn');

filterCategoryBtns.forEach(function (filterCategoryBtn) {
  filterCategoryBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('filter__category-btn_active')) {
      e.target.classList.add('filter__category-btn_active');
    } else {
      e.target.classList.remove('filter__category-btn_active');
    }
  });
});

const filterSortBtns = document.querySelectorAll('.filter__sort-btn');

filterSortBtns.forEach(function (filterSortBtn) {
  filterSortBtn.addEventListener('click', function (e) {
    filterSortBtns.forEach(function (filterSortBtn) {
      filterSortBtn.classList.remove('filter__sort-btn_active');
    });
    if (!e.target.classList.contains('filter__sort-btn_active')) {
      e.target.classList.add('filter__sort-btn_active');
    }
  });
});

const filterBtn = document.querySelector('.filter__btn');
const filterBtnClear = document.querySelector('.filter__btn-clear');
const filterBtnPlus = document.querySelector('.filter__btn-plus');

const filterBody = document.querySelector('.filter__body');

filterBtn.addEventListener('click', function () {
  if (!filterBody.classList.contains('filter__body_open')) {
    filterBody.classList.add('filter__body_open');
    filterBtnClear.style.opacity = '1';
    filterBtnPlus.textContent = '-';
    filterBtnPlus.style.top = '-2.5px';
    filterBtnPlus.style.left = '1.2px';
    filterBtnPlus.style.transform = 'rotate(0deg)';
  } else {
    filterBody.classList.remove('filter__body_open');
    filterBtnClear.style.opacity = '0';
    filterBtnPlus.textContent = '+';
    filterBtnPlus.style.top = '1px';
    filterBtnPlus.style.left = '0px';
    filterBtnPlus.style.transform = 'rotate(360deg)';
  }
});

const filterWrapSort = document.querySelector('.filter__wrap-sort');
const filterWrapSortArrow = document.querySelector('.filter__wrap-sort-arrow');

// filterSortBtnActive.addEventListener('click', function () {
//   filterWrapSort.classList.toggle('filter__wrap-sort_open');
//   filterWrapSortArrow.classList.toggle('filter__wrap-sort-arrow_rotate');
// });
// let nowWrapElem = 0;
// let filterOrder = function () {
//   return nowWrapElem--;
// };

filterSortBtns.forEach(function (filterSortBtn) {
  filterSortBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('order')) {
      e.target.classList.add('order');
    } else {
      e.target.classList.remove('order');
    }
    setTimeout(() => {
      filterWrapSort.classList.toggle('filter__wrap-sort_open');
      filterWrapSortArrow.classList.toggle('filter__wrap-sort-arrow_rotate');
    }, 45);
  });
});
