let words1 = ["Hello", "How are you", "Fine", "Good", "Better"];
let words2 = ["Ayyy", "Hyyy", "Oyyy"];

console.log(words1);
console.log(words2);

console.log(...words1);
console.log(...words2);

// words1.push(words2);
// console.log(words1);

words1.push(...words2);
console.log(...words1);

let names = "kandarp dave";
console.log(names);
console.log(...names);

let maxi = Math.max(1,2,3);
console.log(maxi);

let nums = [1,2,3,4,5,6,7,8,9,10];
// let maxEle = Math.max(nums);
let maxEle = Math.max(...nums);
console.log(maxEle);