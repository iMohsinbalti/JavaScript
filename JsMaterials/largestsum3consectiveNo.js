let arr = [1, 4, 3, 4, 5, 6, 7];
let sum = [];
for (let i = 0; i < arr.length; i++) {
  if (isNaN(arr[i] + arr[i + 1] + arr[i + 2])) {
    continue;
  } else {
    sum.push(arr[i] + arr[i + 1] + arr[i + 2]);
  }
}

sum.sort((a, b) => b - a);
console.log(sum[0]);
