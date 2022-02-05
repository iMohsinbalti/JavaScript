var arr = ["Mohsin", "ali", "khan", "How"];
var l = arr.length;
console.log(arr[0].length);
document.write(l);
for (let i = 0; i < arr[0].length; i++) {
  console.log(arr[i]);
}
// arr.forEach((element) => {
//   document.write(element);
// });
arr.forEach((element) => {
  if (element == "Mohsin") {
    document.write(" ", element);
  } else {
    document.write("<br>This is not in function");
  }
});
