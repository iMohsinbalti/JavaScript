const arr = [1, 3, 5, 7, 9];
const minsort = [];
const maxsort = [];
var maxsum;
var minsum;
arr.sort((a, b) => a - b);
for (let i = 0; i < arr.length - 1; i++) {
  minsort.push(arr[i]);
}
arr.sort((a, b) => b - a);
for (let i = 0; i < arr.length - 1; i++) {
  maxsort.push(arr[i]);
}
maxsum = maxsort.reduce((total, a) => (total += a));

minsum = minsort.reduce((total, a) => (total += a));
console.log(`${minsum} ${maxsum}`);
