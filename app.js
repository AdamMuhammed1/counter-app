const container = document.querySelector('.container');
const button = document.querySelector('button');
const colors = ['violet', 'red', 'green', 'pink', 'black', 'yellow'];

container.style.backgroundColor = 'violet';

button.addEventListener('click', function () {
  const colorIndex = parseInt(Math.random() * colors.length);
  container.style.backgroundColor = colors[colorIndex];
});
