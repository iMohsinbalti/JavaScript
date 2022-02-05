const moive = [
  {
    title: "Avatar",
    year: "2009",
    rating: "4",
  },
  {
    title: "I am langed",
    year: "2012",
    rating: "4",
  },
  {
    title: "Ak tha tigar",
    year: "2015",
    rating: "5",
  },
  {
    title: "Web app",
    year: "2019",
    rating: "5",
  },
  {
    title: "Webjcack",
    year: "2020",
    rating: "5",
  },
];

//Question 1
//new array whcih contain just contain movie titile

const movietitle = moive.map((v) => v.title);
console.log(movietitle);

//Question 2
//new array which contain only 4 star

const fourstar = moive.filter((v) => v.rating == "4");
console.log(fourstar);

//Questioin4
//how many movie that conatin 5 star

const totalmovie = moive.reduce((total, mo) => {
  if (mo.rating === "5") {
    total++;
  }
  return total;
}, 0);
console.log(totalmovie);
