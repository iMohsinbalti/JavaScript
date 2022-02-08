const a = [2, 5, 6, 10, 11];
a.sort((a, b) => a - b);

var ma = [];
for (let i = a[0]; i < a[a.length - 1]; i++) {
  if (!a.includes(i)) {
    ma.push(i);
  } else {
  }
}
console.log(ma);
