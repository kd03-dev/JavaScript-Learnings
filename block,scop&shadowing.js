// let and cosnt are block scoped 
{
    var a=10;   // this can be accessible outside of the block, because it is a member of a global obj
    let b=20;   // this can not be accessible outside of the block, because it is a member of separate memory block
    const c=30;  // similar with the let 

    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);


var x=1;
let y=2;  // even if we declare let and const varibles globally, they are put in a separate memory block(named: script)
const z=3;
{
    // this all are the shadows of the globally defined varible
    var x=100;   
    let y=200;
    const z=300;

    console.log(x);   //100
    console.log(y);   //200
    console.log(z);   //300
}
console.log(x); // here, it is also printing 100, even if we outside of the block. This is because var variable is also put into a global memory even if we declared it into a block. So, now outside of the block and inside of block a is common in global memory. So, when value of a has been changed to the 100, in the global storage a's value has been changed to the 100
console.log(y); // 2, because the upper y is inside script block and inner y is inside an another block. So, both are in difference scops that's why they both are difference, they will assigned separate memory
console.log(z); // 3, similar with the let



//similarly lexical environment lexical scope has also same rule
let m=3;
{
    // let m=4;
    {
        // let m=5;
        console.log(m); 
    }
    console.log(m);
}
console.log(m);



// illegal shadowing: we can not make a shadow of a variable which has bigger range of scope
var p="hello";
{
    let p="world";  // this p is in block separated storage, so it will not affect the global p
    console.log(p); // world
}
console.log(p); // hello, from the global space
// it is legal


let q="hi";
{
    // var q="hey";  // this gives an error because global q wants to make it values protected by q(in script), at the same time same variable q also wants to become a globally accessed variable inside global storage. this is illegal
}



// all above varible rules are also applicable for anonymous and arrow functions 

