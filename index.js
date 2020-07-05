const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

let timerId = null;
let index;

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bodyRef = document.querySelector('body');
const startbtnRef = document.querySelector('button[data-action="start"]');
const stopbtnRef = document.querySelector('button[data-action="stop"]');

startbtnRef.addEventListener('click', () => {
  startbtnRef.disabled = true;
  timerId = setInterval(() => {
    console.log(index);
    const newindex = randomIntegerFromInterval(0, Number(colors.length) - 1);
    newindex !== index ? (index = newindex) : (index = newindex - 1);
    if (index === -1) {
      index = newindex + 1;
    }
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
