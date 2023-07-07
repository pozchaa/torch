const payForm = document.querySelector('.pay-form__wrap')

const BtnRecipient = document.querySelector('.pay-form__btn-recipient')
const BtnAddress = document.querySelector('.pay-form__btn-address')

const inputsRecipient = document.querySelector(
  '.pay-form__block-inputs-recipient'
)
const inputsAddress = document.querySelector('.pay-form__block-inputs-address')

const contentRecipient = document.querySelector(
  '.pay-form__inputs-content-recipient'
)
const contentAddress = document.querySelector(
  '.pay-form__inputs-content-address'
)

if (BtnRecipient) {
  BtnRecipient.addEventListener('click', (event) => {
    event.preventDefault()
    if (BtnRecipient.classList.contains('pay-form__btn_active')) {
      BtnRecipient.style.display = 'none'
      payForm.style.gridTemplateRows = 'auto'
      inputsRecipient.style.display = 'block'
      contentRecipient.style.display = 'none'
    }
  })
}

if (BtnAddress) {
  BtnAddress.addEventListener('click', (event) => {
    event.preventDefault()
    if (BtnRecipient.classList.contains('pay-form__btn_active')) {
      BtnAddress.style.display = 'none'
      payForm.style.gridTemplateRows = 'auto'
      inputsAddress.style.display = 'block'
      contentAddress.style.display = 'none'
    }
  })
}
