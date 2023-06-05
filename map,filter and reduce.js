/*
map -> is used to transform the whole array or all the elements of the array. ex: return the array which will be double of all the elements of given array
filter -> is used to filter out some values from the array. ex: filter out the odd, even or greater than x elements
reduce -> is used to generate and find one value which we want to get by performing an operation. ex: find a sum of given array

reduce takes two parameteres (1)callback function and (2) initial value of temp variable
callback function of reduce also takes two parametes (1)accumulated result or temp variable(sum,max,min etc.) (2)takes current element of an array
*/

const arr = [2,3,4,5,6];

let double = arr.map(function(x) {  // you can pass function like this or you can pass the function which is defined and declaerd in the code
    return x*2;
});

let greaterThan3 = arr.filter((x) => x>3);  // you can pass arrow function

let sum = arr.reduce(function(acc, curr) {    // 0 is the initial value of acc. curr is pointing to the elements of the array.
    acc = acc + curr;
    return acc;
}, 0);                                 


console.log(double);
console.log(greaterThan3);
console.log(sum);


// array of objects
const users = [
    {firstName: "Kandarp", lastName: "Dave", age: 21},
    {firstName: "Mahendra Singh", lastName: "Dhoni", age: 41},
    {firstName: "Virat", lastName: "Kohli", age: 35},
    {firstName: "Shubman", lastName: "Gill", age: 23}
]

// return the firstName of all the users
let firstNames = users.map((x) => x.firstName);
console.log(firstNames);

// return the firstName of all the users who has age less than 25
let under25 = users.filter((x) => x.age<25).map((x) => x.firstName); // it is called chaining 
/* first we have filtered an object which has age less than 25 and made below array
[{firstName: "Kandarp", lastName: "Dave", age: 21} , {firstName: "Shubman", lastName: "Gill", age: 23}]
using above array with the help of map, we have created another array of the firstName
*/
console.log(under25);

// Here, we can avoid the use of filter+map chain, instead of it we can use only reduce
let under25Reduced = users.reduce((acc, curr) => {
    if(curr.age<25) {
        acc.push(curr.firstName);
    }

    return acc;
}, []);
console.log(under25Reduced);


// find the frequence of age
let freqOfAge = users.reduce(function(countDict, user){
    if(countDict[user.age]) {
        countDict[user.age]++;
    }
    else {
        countDict[user.age] = 1;
    }

    return countDict;
}, {}); 
console.log(freqOfAge);