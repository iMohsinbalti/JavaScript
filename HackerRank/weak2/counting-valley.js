//const s = "UDDDUDUU";
const path = "DDUUDDUDUUUD";
let a = Array.from(path);
let alt = 0;
let v = 0;
a.forEach((e) => {
  if (e == "U") {
    alt += 1;
    if (alt == 0) {
      v += 1;
    }
  } else {
    alt -= 1;
  }
});
console.log(v);
