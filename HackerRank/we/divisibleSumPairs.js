const arr = [1, 2, 3, 4, 6];

// let m = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[i] < arr[j] && (arr[i] + arr[j]) % 5 === 0) {
//       m++;
//     }
//   }
// }

let result = 0;
for (let num = 0; num < arr.length; num++) {
  for (let i = 1; i < arr.length - num; i++) {
    console.log(num, i);
    const numA = arr[num],
      numB = arr[i + num];
    if ((numA + numB) % 5 === 0) result++;
  }
}

console.log(result);
