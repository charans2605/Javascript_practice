
const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  let count = 0; 
  for (let value of array) 
    if (value)
      count++;
  return count; 
}

// function countTruthy(array) {
//   let count = 0; 
//   for (let value of array) {
//     if (value){
//       count++;
//     }
//   }
//   return count;
// }

// 2. Using normal for loop
// function countTruthy(array) {
//   let count = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i]) {
//       count++;
//     }
//   }
//   return count;
// }

// 3. Using forEach
// function countTruthy(array) {
//   let count = 0;
//   array.forEach(value => {
//     if (value) count++;
//   });
//   return count;
// }

// 4. Using filter() ⭐ (clean & modern)
// function countTruthy(array) {
//   return array.filter(value => value).length;
// }
// Explanation:

// filter(value => value) keeps only truthy values
// .length gives count

// 5. Shortest version using Boolean
// const countTruthy = array => array.filter(Boolean).length;

// 6. Using reduce() (functional approach)
// function countTruthy(array) {
//   return array.reduce((count, value) => {
//     return value ? count + 1 : count;
//   }, 0);
// }

// 7. Using map + filter (not recommended but possible)
// function countTruthy(array) {
//   return array.map(v => Boolean(v)).filter(v => v).length;
// }