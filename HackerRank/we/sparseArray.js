const s = ["aba", "baba", "aba", "xzxb"];
const q = ["aba", "xzxb", "ab"];

let count = {};
const result = Array(q.length);
s.forEach((e) => {
  if (count[e]) {
    count[e]++;
  } else {
    count[e] = 1;
  }
});
console.log(count);

q.forEach((e, i) => {
  if (count[e]) {
    result[i] = count[e];
  } else {
    result[i] = 0;
  }
});
console.log(result);
