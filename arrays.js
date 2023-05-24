let fruits = ["apple", "mango", "banana"];

console.log(fruits);      // prints all elements
console.log(fruits[0]);   // acces ith elements
console.log(fruits[3]);   // throws undefined

fruits[0] = "guava";      // update ith element
console.log(fruits);      
console.log(fruits[0]);

fruits.push("kiwi");      // add element from back
console.log(fruits[3]);
console.log(fruits);

fruits.pop();             // remove element from back
console.log(fruits);

fruits.unshift("watermelon");   // add element from front
console.log(fruits);

fruits.shift();  // remove element from front
console.log(fruits);

console.log(fruits.indexOf("mango"));   // returns index=1
console.log(fruits.indexOf("coconut"))  // returns -1, because it doesn't exist

console.log(fruits.length);   // returns length of array

for(let i=0; i<fruits.length-1; ++i) {
    console.log(fruits[i]+" ");
}

for(let fruit of fruits) {
    console.log(fruit+" ");
}


