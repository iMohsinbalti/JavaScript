const mainHeadline = document.getElementById("main-headline");
console.log(mainHeadline.textContent);
console.log(mainHeadline.innerText);

// mainHeadline.textContent = "This is something";
// mainHeadline.innerText = "this is me";
// mainHeadline.style.color = "Blue";

const link = document.querySelector("a");

console.log(link.getAttribute("href").slice(1));

link.setAttribute("href", "Htttps//:www.com");
console.log(link.getAttribute("href"));

// const navitems = document.getElementsByClassName("nav-items");
let navitems = document.getElementsByTagName("a");
console.log(navitems.length);
//we cann't use forecah to itraate Htmlcollection
for (let i = 0; i < navitems.length; i++) {
  const navitem = navitems[i];
  //   navitem.style.backgroundColor = "#ffff";
  navitem.style.color = "green";
}
//

for (let navitem of navitems) {
  navitem.style.backgroundColor = "#ffff";
  //   navitem.style.color = "green";
}
for (let navitem of navitems) {
  navitem.style.backgroundColor = "yellow";
  //   navitem.style.color = "green";
}
// navitems.forecah((navitem) => {
//   //couldnot change
//   navitem.style.backgroundColor = "blue";
// });
console.log(Array.isArray(navitems));
console.log(navitems);
navitems = Array.from(navitems);
console.log(Array.isArray(newitems));
console.log(newitems);
navitems.foreach((navitem) => {
  //couldnot change
  console.log(navitem);
  navitem.style.backgroundColor = "blue";
});
