
showNumbers(10);

function showNumbers(limit) {
  for (let i = 0; i <= limit; i++) {
    const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
    console.log(i, message);
  }
}

// 1. Using if-else (basic method)
// function showNumbers(limit) {
//   for (let i = 0; i <= limit; i++) {
//     let message;

//     if (i % 2 === 0) {
//       message = 'EVEN';
//     } else {
//       message = 'ODD';
//     }

//     console.log(i, message);
//   }
// }

// showNumbers(10);

// 2. Using while loop
// function showNumbers(limit) {
//   let i = 0;

//   while (i <= limit) {
//     const message = (i % 2 === 0) ? 'EVEN' : 'ODD';
//     console.log(i, message);
//     i++;
//   }
// }

// showNumbers(10);

// 3. Using forEach (array method)
// function showNumbers(limit) {
//   const numbers = Array.from({ length: limit + 1 }, (_, i) => i);

//   numbers.forEach(i => {
//     const message = i % 2 === 0 ? 'EVEN' : 'ODD';
//     console.log(i, message);
//   });
// }

// showNumbers(10);

// 4. Using Arrow Function
// const showNumbers = (limit) => {
//   for (let i = 0; i <= limit; i++) {
//     console.log(i, i % 2 === 0 ? 'EVEN' : 'ODD');
//   }
// };

// showNumbers(10);

// 5. Print only EVEN numbers
// function showEven(limit) {
//   for (let i = 0; i <= limit; i++) {
//     if (i % 2 === 0) {
//       console.log(i, 'EVEN');
//     }
//   }
// }

// showEven(10);

// 6. Using map (functional style)
// function showNumbers(limit) {
//   Array.from({ length: limit + 1 }, (_, i) => i)
//     .map(i => `${i} ${i % 2 === 0 ? 'EVEN' : 'ODD'}`)
//     .forEach(result => console.log(result));
// }

// showNumbers(10);