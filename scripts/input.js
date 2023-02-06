var inputLeft = document.getElementById('input-left');
var inputRight = document.getElementById('input-right');

var thumbLeft = document.querySelector('.slider > .thumb.left');
var thumbRight = document.querySelector('.slider > .thumb.right');
var range = document.querySelector('.slider > .range');

function setLeftValue() {
  var _this = inputLeft,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbLeft.style.left = percent + '%';
  range.style.left = percent + '%';
}
setLeftValue();

function setRightValue() {
  var _this = inputRight,
    min = parseInt(_this.min),
    max = parseInt(_this.max);

  _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);

  var percent = ((_this.value - min) / (max - min)) * 100;

  thumbRight.style.right = 100 - percent + '%';
  range.style.right = 100 - percent + '%';
}
setRightValue();

inputLeft.addEventListener('input', setLeftValue);
inputRight.addEventListener('input', setRightValue);

inputLeft.addEventListener('mouseover', function () {
  thumbLeft.classList.add('hover');
});
inputLeft.addEventListener('mouseout', function () {
  thumbLeft.classList.remove('hover');
});
inputLeft.addEventListener('mousedown', function () {
  thumbLeft.classList.add('active');
});
inputLeft.addEventListener('mouseup', function () {
  thumbLeft.classList.remove('active');
});

inputRight.addEventListener('mouseover', function () {
  thumbRight.classList.add('hover');
});
inputRight.addEventListener('mouseout', function () {
  thumbRight.classList.remove('hover');
});
inputRight.addEventListener('mousedown', function () {
  thumbRight.classList.add('active');
});
inputRight.addEventListener('mouseup', function () {
  thumbRight.classList.remove('active');
});

(function () {
  var parent = document.querySelector('#rangeSlider');
  if (!parent) return;

  var rangeS = parent.querySelectorAll('input[type=range]'),
    numberS = parent.querySelectorAll('input[type=number]');

  rangeS.forEach(function (el) {
    el.oninput = function () {
      var slide1 = parseFloat(rangeS[0].value),
        slide2 = parseFloat(rangeS[1].value);

      if (slide1 > slide2) {
        [slide1, slide2] = [slide2, slide1];
        // var tmp = slide2;
        // slide2 = slide1;
        // slide1 = tmp;
      }

      numberS[0].value = slide1;
      numberS[1].value = slide2;
      
    };
  });

  numberS.forEach(function (el) {
    el.oninput = function () {
      var number1 = parseFloat(numberS[0].value),
        number2 = parseFloat(numberS[1].value);

      if (number1 > number2) {
        var tmp = number1;
        numberS[0].value = number2;
        numberS[1].value = tmp;
      }

      rangeS[0].value = number1;
      rangeS[1].value = number2;
      setLeftValue();
      setRightValue()
    };
  });
})();
