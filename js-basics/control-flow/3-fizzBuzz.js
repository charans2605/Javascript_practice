
  const output = fizzBuzz(12);
  console.log(output);

  function fizzBuzz(input) {
    if (typeof input !== 'number')
      return NaN; 

    if ((input % 3 === 0) && (input % 5 === 0))
      return 'FizzBuzz'; 

    if (input % 3 === 0)
      return 'Fizz'; 

    if (input % 5 === 0)
      return 'Buzz'; 

    return input; 
  }

// 1. Using else if (structured way)
//   function fizzBuzz(input) {
//   if (typeof input !== 'number') {
//     return NaN;
//   } else if (input % 3 === 0 && input % 5 === 0) {
//     return 'FizzBuzz';
//   } else if (input % 3 === 0) {
//     return 'Fizz';
//   } else if (input % 5 === 0) {
//     return 'Buzz';
//   } else {
//     return input;
//   }
// }

// console.log(fizzBuzz(12));

// 2. Using Ternary Operator (short form)
// const fizzBuzz = (input) =>
//   typeof input !== 'number' ? NaN :
//   input % 3 === 0 && input % 5 === 0 ? 'FizzBuzz' :
//   input % 3 === 0 ? 'Fizz' :
//   input % 5 === 0 ? 'Buzz' :
//   input;

// console.log(fizzBuzz(12));

// 3. Using Variables (clean logic)
// function fizzBuzz(input) {
//   if (typeof input !== 'number') return NaN;

//   const divisibleBy3 = input % 3 === 0;
//   const divisibleBy5 = input % 5 === 0;

//   if (divisibleBy3 && divisibleBy5) return 'FizzBuzz';
//   if (divisibleBy3) return 'Fizz';
//   if (divisibleBy5) return 'Buzz';

//   return input;
// }

// console.log(fizzBuzz(12));

// 4. Using Loop (common interview version)
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log('FizzBuzz');
//   } else if (i % 3 === 0) {
//     console.log('Fizz');
//   } else if (i % 5 === 0) {
//     console.log('Buzz');
//   } else {
//     console.log(i);
//   }
// }

// 5. Using Switch (less common but possible)
// function fizzBuzz(input) {
//   if (typeof input !== 'number') return NaN;

//   switch (true) {
//     case input % 3 === 0 && input % 5 === 0:
//       return 'FizzBuzz';
//     case input % 3 === 0:
//       return 'Fizz';
//     case input % 5 === 0:
//       return 'Buzz';
//     default:
//       return input;
//   }
// }

// console.log(fizzBuzz(12));