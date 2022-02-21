const s = "SOSSPSSQSSOR";
let wrongletter = 0;

for (let i = 0; i < s.length; i = i + 3) {
  if (s[i] != "S") {
    wrongletter++;
  }
  if (s[i + 1] != "O") {
    wrongletter++;
  }
  if (s[i + 2] != "S") {
    wrongletter++;
  }
}
console.log(wrongletter);
