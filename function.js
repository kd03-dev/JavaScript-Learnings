// function fullName() {
//     document.getElementById("demo").innerHTML="Kandarp";
//     console.log("Kandarp Dave");
// }

startProgram();
let str=func("Kandarp",21,"hello");
console.log(str);

function startProgram() {

    let uname="Kandarp";
    let age=21;

    wishingFun(uname,age);
}

function wishingFun(uname, age) {

    console.log("Happy Birthday", uname);
    console.log("You're now", age);
}

function func(uname,age) {   //first parameter automatically taken

    return "Happy, Birthday "+uname;
}