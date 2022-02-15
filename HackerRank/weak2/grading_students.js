const h = [];

s.forEach((element) => {
  if (element < 40) {
    if (element > 37) {
      h.push(40);
    } else {
      h.push(element);
    }
  }
  if (element >= 40) {
    if (element % 5 == 0) {
      h.push(element);
    } else {
      if ((element + 2) % 5 == 0) {
        const two = element + 2;
        h.push(two);
      }
      if ((element + 1) % 5 == 0) {
        const one = element + 1;
        h.push(one);
      }
      if ((element + 4) % 5 == 0 || (element + 3) % 5 == 0) {
        h.push(element);
      }
    }
  }
});
console.log(h);
