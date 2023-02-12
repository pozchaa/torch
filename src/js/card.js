const cardForeverBtns = document.querySelectorAll('.card__forever-btn');

cardForeverBtns.forEach(function (cardForeverBtn) {
  cardForeverBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('card__forever-btn_active')) {
      e.target.classList.add('card__forever-btn_active');
    } else {
      e.target.classList.remove('card__forever-btn_active');
    }
  });
});
