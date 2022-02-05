const bowlingScore = [154, 204, 300, 286];
console.log("Challange @2");
//Does the BowlingScore Include 300
const include300 = bowlingScore.includes(300);
console.log("The array include 300", include300);
const SomeUnder150 = bowlingScore.some((under) => under < 150);
console.log("The array has some value under 150", SomeUnder150);
const evennumber = bowlingScore.every((even) => even % 2 == 0);
console.log(evennumber);
