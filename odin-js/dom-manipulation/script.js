const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

// Red <p> with example text
const paraRed = document.createElement('p');
paraRed.style.color = 'red';
paraRed.textContent = "Hey I'm red!";
container.appendChild(paraRed);

// Blue <h3> with example text
const headingBlue = document.createElement('h3');
headingBlue.style.color = 'blue';
headingBlue.textContent = "I'm a blue h3!";
container.appendChild(headingBlue);

// Black border, pink background <div>
const myDiv = document.createElement('div');
myDiv.classList.add('myDiv');
myDiv.setAttribute('style', 'border: solid; background-color: pink;');

// <h1> in myDiv
const myHeading = document.createElement('h1');
myHeading.textContent = "I'm in a div";
myDiv.appendChild(myHeading);

// <p> in myDiv
const myParagraph = document.createElement('p');
myParagraph.textContent = 'ME TOO!';
myDiv.appendChild(myParagraph);
