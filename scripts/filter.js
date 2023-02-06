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
console.log(filterBtnPlus.textContent);
const filterBody = document.querySelector('.filter__body');

filterBtn.addEventListener('click', function () {
  if (!filterBody.classList.contains('filter__body_open')) {
    filterBody.classList.add('filter__body_open');
    filterBtnClear.style.opacity = '1';
    filterBtnPlus.textContent = '-';
    filterBtnPlus.style.top = '-3.5px';
  } else {
    filterBody.classList.remove('filter__body_open');
    filterBtnClear.style.opacity = '0';
    filterBtnPlus.textContent = '+';
    filterBtnPlus.style.top = '-1.2px';
  }
});
