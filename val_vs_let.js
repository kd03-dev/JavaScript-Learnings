console.log("It's var vs let, not val vs let");

//declare global variable using let only
//if you declare using var, then if it matches with any windows property name, it may change that windows property's value
//var name="Kandarp";
let name="Kandarp";

// let = scope is limited to block 
// var = scope is limited to function

for(let i=0; i<5; ++i) {
    console.log(i);
}
//console.log(i);  //can't access here

for(var j=0; j<5; ++j) {
    console.log(j);
}
console.log(j); //can access here 

func();

function func() {

    var temp="Hello";
    console.log(temp);   // can access here
}
//console.log(temp);    // can't access here