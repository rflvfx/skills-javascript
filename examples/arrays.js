// Common array transformations
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("map:", nums.map((n) => n * 2));
console.log("filter:", nums.filter((n) => n % 2 === 0));
console.log("reduce:", nums.reduce((a, b) => a + b, 0));
console.log("find:", nums.find((n) => n > 5));
