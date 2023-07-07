const formPersonalMobile = document.querySelectorAll(
  '.account__form-personal_mobile'
)
const formAddressMobile = document.querySelectorAll(
  '.account__form-address_mobile'
)
const personBtnMobile = document.querySelectorAll(
  '.account__person-btn_mobile'
)
// selectSingle
const addressBtnMobile = document.querySelectorAll(
  '.account__address-btn_mobile'
)

if (personBtnMobile) {
  personBtnMobile.addEventListener('click', function (e) {
    if (!e.target.classList.contains('card__forever-btn_active')) {
      e.target.classList.add('card__forever-btn_active')
    } else {
      e.target.classList.remove('card__forever-btn_active')
    }
  })
}
