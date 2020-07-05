const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startbtnRef = document.querySelector('button[data-action="start"]');
const stopbtnRef = document.querySelector('button[data-action="stop"]');

let timerId = null;

startbtnRef.addEventListener('click', () => {
  startbtnRef.disabled = true;
  timerId = setInterval(() => {
    const index = randomIntegerFromInterval(0, Number(colors.length) - 1);
    const bg = colors.find(color => colors.indexOf(color) === index);
    console.log(bg);
    bodyRef.style = `background-color:${bg}`;
    startbtnRef.disabled = true;
  }, 1000);
});

stopbtnRef.addEventListener('click', () => {
  startbtnRef.disabled = false;
  clearInterval(timerId);
  console.log('setInterval stopped!');
});
