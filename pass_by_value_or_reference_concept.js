// although in js, primitive data types are also objects, but they are passed by value. and All other data types are passed by reference

const var1 = 'kandarp';
let var2 = var1;
console.log(var1 + " & " + var2);

var2 = 'dave'
console.log(var1 + " & " + var2);     // here we change the vaule of var2, but var1 is not changed


const obj1 = {

    name: 'kandarp',
    age: 21
}
let obj2 = obj1;
console.log(obj1);
console.log(obj2)

obj2.name = 'dave';
console.log(obj1);     // here when we change the vaule of name property of obj2, name property of obj1 is also changed
console.log(obj2)




console.log("---------------------------------------obj pass by value using spread operator----------------------------------------------")

let obj3 = { ...obj1 };
console.log(obj3);

obj3.name = 'kd';
console.log(obj1);  
console.log(obj3);


console.log("---------------------------------------obj pass by value using Object.assign()----------------------------------------------")

let obj4 = Object.assign({}, obj3);
obj4.name = 'ks';
console.log(obj3);
console.log(obj4);


console.log("---------------------------------------obj pass by value using for loop----------------------------------------------")

let obj5 = {};
for(let key of Object.keys(obj1)) {
    obj5[key] = obj1[key];
}
console.log(obj5);

obj5.name = 'ksdave';
console.log(obj1);
console.log(obj5);