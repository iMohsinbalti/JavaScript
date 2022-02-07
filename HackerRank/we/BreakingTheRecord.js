function record([h, ...score]) {
  let low = h;
  let he = h;
  let hres = 0;
  let lres = 0;
  score.forEach((s) => {
    if (s < low) {
      low = s;
      lres++;
      console.log(lres);
    } else if (s > he) {
      he = s;
      hres++;
    }
  });
  return lres, hres;
}

const score = [10, 5, 20, 20, 4, 5, 2, 25, 5, 1];
record(score);
console.log(record(score));
