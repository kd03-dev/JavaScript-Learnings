// console.log("Kandarp Dave");
// console.log("Computer Engineer");

// //varibles 
// let age=20;
// let studentName="abc";
// let student=false;
// console.log(age);
// console.log(studentName);
// console.log(student);

// let course="DSA", courseId=447;
// console.log(course + ": " + courseId );

// //user input
// //first way
// // let username = window.prompt("Enter your name");
// // console.log(username);

// //second way
// let username;
// document.getElementById("submit").onclick = function() {

//     username = document.getElementById("myname").value;
//     console.log(username);
//     document.getElementById("printname").innerHTML="Hello "+username;
// }

// //By default user input accepts in string
// // let num = window.prompt("Enter your age");
// // console.log(num, typeof num);

// // let n=Number(num);
// // console.log(n, typeof n);

// let str = "3.14";
// console.log(str, typeof str);

// let num = Number(str);
// console.log(num, typeof num);

// let s = "hello";
// console.log(s, typeof s); 

// let n = Number(s);
// console.log(n); // NaN

// let word = "";
// console.log(word, typeof word);

// let bool = Boolean(word);
// console.log(bool, typeof bool);

// let w = "dave";
// console.log(w, typeof w);

// let b = Boolean(w);
// console.log(b, typeof b);

// let x=5;
// console.log(x, typeof x);

// let strx=String(x);
// console.log(strx, typeof strx);

// let y = true;
// console.log(y, typeof y);

// let stry=String(y);
// console.log(stry, typeof stry);

// //const - can't be changed
// const PI = 3.14;
// let radius = 2;
// //PI = 10.10;
// let circumference = 2 * PI * radius;
// console.log(circumference);

// //Math class - all basic mathematics functions
// let p=2, q=3, r=4;
// console.log(Math.max(p,q,r));
// console.log(Math.min(p,q,r));

document.getElementById("calcu").onclick = function() {

    let a = Number(document.getElementById("aId").value);
    let b = document.getElementById("bId").value;

    let c = Math.pow(a,2)+Math.pow(b,2);
    c = Math.sqrt(c);

    console.log(c);
}