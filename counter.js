const counter = document.querySelector('.counter');
const lowerCount = document.querySelector('.lowercount');
const addCount = document.querySelector('.addcount');

let currentValue = 0;

addCount.addEventListener('click', function () {
  currentValue += 1;
  counter.innerHTML = currentValue;
});
lowerCount.addEventListener('click', function () {
  currentValue -= 1;
  counter.innerHTML = currentValue;

  if (currentValue < 0) {
    currentValue = 0;
    counter.innerHTML = currentValue;
  }
});
