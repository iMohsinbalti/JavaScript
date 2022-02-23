const sum = (e, j) => {
  let r = 0;
  for (i = e; i < j + 1; i++) {
    r += i;
  }
  console.log(r);
};
sum(3, 7);
