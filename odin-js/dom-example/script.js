// const btn = document.querySelector('#btn');
// btn.onclick = () => alert('Hello World');

/*const btn = document.querySelector('#btn');
btn.addEventListener('click', () => {
  alert('Hello World');
});*/

// Method 1
const alertFunction = () => alert('YAY! YOU DID IT!');

// METHODS 2 & 3
const btn = document.querySelector('#btn');

// Method 2
btn.onclick = alertFunction;

// Method 3
btn.addEventListener('click', alertFunction);

btn.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});
