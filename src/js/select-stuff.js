const selectSingle = document.querySelectorAll('.__select')
// const selectSingle_title = selectSingle.querySelectorAll('.__select__title')
// const selectSingle_labels = selectSingle.querySelectorAll('.__select__label')
const selectSingle_title = document.querySelectorAll('.__select__title')
const selectSingle_labels = document.querySelectorAll('.__select__label')

// Toggle menu
selectSingle_title.forEach((element) => {
  element.addEventListener('click', () => {
    // console.log(element.parentElement)
    if ('active' === element.parentElement.getAttribute('data-state')) {
      element.parentElement.setAttribute('data-state', '')
    } else {
      element.parentElement.setAttribute('data-state', 'active')
    }
  })
})
// selectSingle_title.addEventListener('click', () => {
//   if ('active' === selectSingle.getAttribute('data-state')) {
//     selectSingle.setAttribute('data-state', '')
//   } else {
//     selectSingle.setAttribute('data-state', 'active')
//   }
// })

// Close when click to option
selectSingle_labels.forEach((label) => {
  label.addEventListener('click', (evt) => {
    label.parentElement.previousElementSibling.textContent =
      evt.target.textContent
    label.parentElement.parentElement.setAttribute('data-state', '')
  })
})

// for (let i = 0; i < selectSingle_labels.length; i++) {
//   selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent
//     selectSingle.setAttribute('data-state', '')
//   })
// }

// for (let i = 0; i < selectSingle_labels.length; i++) {
//   selectSingle_labels[i].addEventListener('click', (evt) => {
//     selectSingle_title.textContent = evt.target.textContent
//     console.log(selectSingle_title.target)
//     selectSingle.forEach((element) => {
//       //   console.log(element.children[0].target)
//       element.children[0].textContent = evt.target.textContent
//       element.parentElement.setAttribute('data-state', '')
//     })
//     // selectSingle.setAttribute('data-state', '')
//   })
// }

// Reset title
// const reset = document.querySelector('.reset')
// reset.addEventListener('click', () => {
//   selectSingle_title.textContent =
//     selectSingle_title.getAttribute('data-default')
// })
