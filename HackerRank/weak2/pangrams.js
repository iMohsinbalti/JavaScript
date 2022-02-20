const s = "We promptly judged jjjjjeeeentique ivory buckles for the next prize";
let letters = [];
for (let letter of s) {
  const ltr = letter.toLowerCase();
  console.log(!letters.includes(ltr));
  if (!letters.includes(ltr) && letter != " ") letters.push(ltr);
}
console.log(letters.length == 26 ? "pangram" : "not pangram");
