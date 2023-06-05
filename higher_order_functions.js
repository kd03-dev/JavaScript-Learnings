/*
-> first order functions: a function which can act as a value such as pass an an argument or return as a value
-> callback functions: a function which can pass as an argument, by definition callbacks are first order functions
-> higher order functions : a function which can recieve or return a function, that's why js can behave as a function programming language
*/

console.log("--------here is a program to find area, diameter and circumference of round--------");

let radius = [2,3,4,5];

let area = function(radius) {

    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(Math.PI * radius[i] * radius[i]);
    }
    return output;
}
console.log(area(radius));

// but what if we also want to find circumference
let circumference = function(radius) {

    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(Math.PI * radius[i] * 2);
    }
    return output;
}
console.log(circumference(radius));

// now we also want to find diameter 
let diameter = function(radius) {

    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(2 * radius[i]);
    }
    return output;
}
console.log(diameter(radius));


// but above methods are so repetitive, so according to the DRY principle, we need to optimized it using functional programming and generic function
console.log("--------Here, create a higher order function and pass a function to it what you want to calculate, it will return it. Code is optimized in terms of length and debugging side--------")
let  calArea = function (r) { return (Math.PI * r * r); }

let calCircumference = function (r) { return (Math.PI * r * 2); }

let calDiameter = function (r) { return (2 * r); }

let calculate = function(radius, logicOfCode) {
    
    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(logicOfCode(radius[i]));
    }
    return output;
}

console.log(calculate(radius,calArea)); 
console.log(calculate(radius,calCircumference));
console.log(calculate(radius,calDiameter));


/* Here calculate function is a little bit similar to the map higher order function  

    radius.map(calArea);
    calculate(radius, Area);
 
*/

console.log("--------Let's make calculate almost similar to map using Array.prototype--------");
Array.prototype.calculate2 = function(logicOfCode) {

    const output = [];
    for(let i=0; i<radius.length; ++i) {
        output.push(logicOfCode(radius[i]));
    }
    return output;
}

console.log(radius.calculate2(calArea));