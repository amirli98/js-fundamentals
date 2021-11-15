const hobbies = ["Sports", "Cooking", "Reading"];

// adds element to the end of the array and returns the length of the array
console.log(hobbies.push("Writing"));

// adds element to the beginning of the array and returns new length of the array
hobbies.unshift("Walking");

console.log(hobbies);

// removes the last element from the array and returns it
hobbies.pop();

console.log(hobbies);
// removes the first element of the array and returns it
console.log(hobbies.shift());

let prices = [10.99, 3.99, 3.99, 2.99, 20.12, 1.45];
console.log(
  prices.sort((a, b) => {
    if (a > b) return 1;
    else return -1;
  })
);
