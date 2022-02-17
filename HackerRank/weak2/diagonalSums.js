function diagonalSums(matrix) {
  let mainSum = 0,
    secondarySum = 0,
    sum = 0;
  for (let row = 0; row < matrix.length; row++) {
    mainSum += matrix[row][row];
    console.log(row, matrix.length - row - 1);
    secondarySum += matrix[row][matrix.length - row - 1];
  }
  sum = mainSum - secondarySum;
  console.log(Math.abs(sum));
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];
diagonalSums(arr);
