const cats = ['Pete', 'Biggles', 'Jasmine'];

let myFavoriteCats = 'My cats are called ';

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    // We are at the end of the array
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."

// function sumOfTripledEvens(array) {
//   let sum = 0;
//   for (let i = 0; i < Array.length; i++) {
//     if (array[i] % 2 === 0) {
//       const tripleEvenNumber = array[i] * 3;

//       sum += tripleEvenNumber;
//     }
//   }
//   return sum;
// }

function addOne(num) {
  return num + 1;
}

const arr = [1, 2, 3, 4, 5];
// const mappedArr = arr.map(addOne);
const mappedArr = arr.map((num) => num + 1);

console.log(mappedArr);
console.log(arr);

function isOdd(num) {
  return num % 2 !== 0;
}

function isEven(num) {
  return num % 2 === 0;
}

const oddNums = arr.filter(isOdd);
console.log(oddNums);
console.log(arr);

const productOfAllNums = arr.reduce((total, currentItem) => {
  return total * currentItem;
}, 1);
console.log(productOfAllNums);
console.log(arr);

console.log('Example Below!');

function sumOfTripledEvens(array) {
  const evenNums = array.filter(isEven);
  const mappedEvenNums = evenNums.map((num) => num * 3);
  const reducedNums = mappedEvenNums.reduce((total, currentItem) => {
    return total + currentItem;
  }, 0);
  console.log(evenNums);
  console.log(mappedEvenNums);
  console.log(reducedNums);
}

sumOfTripledEvens(arr);
