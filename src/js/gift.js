const cardBtns = document.querySelectorAll('.card__btn')

cardBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (
      !btn.classList.contains('card__btn_active') &&
      !btn.classList.contains('card__btn_non-active')
    ) {
      btn.classList.add('card__btn_active')
    } else {
      btn.classList.remove('card__btn_active')
    }
  })
})
