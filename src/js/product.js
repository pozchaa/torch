let globalWidth = window.innerWidth

if (globalWidth > 768) {
  $(function () {
    var isDragging = false
    var mouseIsDown = false
    var curSX = 0
    var curSY = 0
    var ner = document.getElementById('ner')
    $control = $('#controll')
    $control.mousedown(function (e) {
      mouseIsDown = true
      curSX = e.pageX
      curSY = e.pageY
    })
    $control.mouseup(function (e) {
      isDragging = false
      mouseIsDown = false
    })
    $(document).mousemove(function (e) {
      if (mouseIsDown) {
        isDragging = true
        $('#ner').scrollLeft($('#ner').scrollLeft() + curSX - e.pageX)
        //$("#ner").scrollTop($("#ner").scrollTop() + curSY - e.pageY); //1 вариант
        ner.scrollBy(curSX - e.pageX, curSY - e.pageY)
        curSX = e.pageX
        curSY = e.pageY
      }
    })
  })
}

const productSizeBtn = document.querySelectorAll('.product__size-btn')

productSizeBtn.forEach(function (filterCategoryBtn) {
  filterCategoryBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('product__size-btn_active')) {
      e.target.classList.add('product__size-btn_active')
    } else {
      e.target.classList.remove('product__size-btn_active')
    }
  })
})

const productDescription = document.querySelector('.product__description')
const productDescriptionBtn = document.querySelector(
  '.product__description-btn'
)

if (productDescriptionBtn) {
  productDescriptionBtn.addEventListener('click', function () {
    if (!productDescription.classList.contains('product__description_active')) {
      productDescription.classList.add('product__description_active')
    } else {
      productDescription.classList.remove('product__description_active')
    }
  })
}

const productCare = document.querySelector('.product__care')
const productCareBtn = document.querySelector('.product__care-btn')

if (productCareBtn) {
  productCareBtn.addEventListener('click', function () {
    if (!productCare.classList.contains('product__care_active')) {
      productCare.classList.add('product__care_active')
    } else {
      productCare.classList.remove('product__care_active')
    }
  })
}

const cardProductBtns = document.querySelectorAll('.product__forever-btn')

cardProductBtns.forEach(function (cardForeverBtn) {
  cardForeverBtn.addEventListener('click', function (e) {
    if (!e.target.classList.contains('product__forever-btn_active')) {
      e.target.classList.add('product__forever-btn_active')
    } else {
      e.target.classList.remove('product__forever-btn_active')
    }
  })
})

const tableSize = document.querySelector('.table-size')
const tableSizeMobile = document.querySelector('.table-size_mobile')
const productTableBtn = document.querySelector('.product__table-btn')
const tableSizeCross = document.querySelector('.table-size__cross')
const tableSizeCrossMobile = document.querySelector('.table-size__cross_mobile')
const productShareBtn = document.querySelector('.product__share-btn')

if (globalWidth <= 768 && document.querySelector('.table-size')) {
  tableSizeCrossMobile.addEventListener('click', function () {
    if (tableSizeMobile.classList.contains('table-size_active')) {
      tableSizeMobile.classList.remove('table-size_active')
      productShareBtn.style.zIndex = '100'
    }
  })

  productTableBtn.addEventListener('click', function () {
    if (!tableSizeMobile.classList.contains('table-size_active')) {
      tableSizeMobile.classList.add('table-size_active')
      productShareBtn.style.zIndex = '0'
    } else {
      tableSizeMobile.classList.remove('table-size_active')
      productShareBtn.style.zIndex = '100'
    }
  })
} else {
  if (tableSizeCross) {
    tableSizeCross.addEventListener('click', function () {
      if (tableSize.classList.contains('table-size_active')) {
        tableSize.classList.remove('table-size_active')
      }
    })
  }

  if (productTableBtn) {
    productTableBtn.addEventListener('click', function () {
      if (!tableSize.classList.contains('table-size_active')) {
        tableSize.classList.add('table-size_active')
      } else {
        tableSize.classList.remove('table-size_active')
      }
    })
  }
}
