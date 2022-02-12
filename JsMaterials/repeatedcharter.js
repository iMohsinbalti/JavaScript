const s = "abaacdbfcb";
const v = s
  .split("")
  .filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  })
  .join("");

let counts = {};

for (let i = 0; i < s.length; i++) {
  if (counts[s[i]]) {
    counts[s[i]] += 1;
  } else {
    counts[s[i]] = 1;
  }
}

var a = [];
for (let p in counts) {
  if (counts[p] <= 2) {
    a.push(p);
  }
}
console.log(a.join(""));
