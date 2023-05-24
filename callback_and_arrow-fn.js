// normal functions 
console.log("--------------------Normal Functions----------------")
function method() {
    console.log("Hello")
}

function fun(n1, n2) {
    return n1+n2;l̥
}

method();
console.log(fun(2,3));


// arrow functions
console.log("--------------------Arrow/Anonymous Functions----------------")
// arrow functions are always anonymous, so to call that function, we need to store it in a variable. it is mostly used as an argument of another functions
var arrow = () => {    
    console.log("Arrow");
}

var arrow_fun = (n,m) => {
    return n+m;
} 

var arrow_short = (n,m) => n*m;   // if only one statement is there(that is called an expression) and it is returnable, so we do not write {} in this case, statement will be automatically return 

arrow();
console.log(arrow_fun(4,5));
console.log(arrow_short(4,5));

setTimeout(function() {    // pass as an argument
    console.log("3 seconds");
}, 3000);

setTimeout(() => console.log("5 seconds"), 5000)  // pass as an argument with short syntax

console.log("--------------------Callback Functions----------------")
// a callback function is passed as an argument of another function

var add = (n1, n2) => n1+n2; // arrow function 
function multi(n1, n2) {
    return n1*n2;
}


var calc = (n1, n2, callback) => {  // function received as a parameter

    return callback(n1,n2);     // function returned called and returned
}

var additionAns = calc(3,4, add); // function passed as a parameter

var substractionAns = calc(3,4, function(num1, num2) {   // function is writtern at the place of parameter
    return num1-num2;
}) 
    
var multiplicationAns = calc(3,4, multi);  // normal function passed 

console.log(additionAns + ", " + substractionAns, ", " + multiplicationAns);
