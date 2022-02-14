const a = [1, 1, 2];
const j = {};

for (let i = 0; i < a.length; i++) {
  if (j[a[i]]) {
    j[a[i]] += 1;
  } else {
    j[a[i]] = 1;
  }
}
const n = [];
console.log(j);
for (let p in j) {
  if (j[p] == 1) {
    n.push(p);
  }
}
console.log(n);
