const food = [
  { food: "raspbaries", type: "fruut" },
  { food: "organe", type: "fruut" },
  { food: "potato", type: "vegetable" },
  { food: "qunio", type: "grain" },
];
const blackBeans = { food: "black bean", type: "lugmue" };
const chiaSeed = { food: "chia seed", type: "seed" };
//Question1
//remove the last item in the food array
const pop_food = food.pop();
console.log(pop_food);
//Question2
//remove the first item in the food array
const shift_food = food.shift();
console.log(shift_food);
//Question3
//add the end
food.push(blackBeans);
console.log(food);
//Question4
//add the begning
food.push(chiaSeed);
console.log(food);
