const arr = [-4, 3, -9, 0, 4, 1];
const parr = [];
const narr = [];
const zarr = [];

arr.forEach((e) => {
  if (e < 0) {
    narr.push(e);
  }
  if (e > 0) {
    parr.push(e);
  }
  if (e == 0) {
    zarr.push(e);
  }
});
let p = parr.length / arr.length;

let n = narr.length / arr.length;
let z = zarr.length / arr.length;
console.log(p.toFixed(6));
console.log(n.toFixed(6));
console.log(z.toFixed(6));
