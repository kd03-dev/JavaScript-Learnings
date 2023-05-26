// Factory Function
function factoryFunction(name) {
    return  {
        name: name,
        age: 21,
        here: function () {
            console.log(name + ", " + this.age);  // here this must be specified, otherwise age will not be recognized
        }
    };
}

let factoryFun1 = factoryFunction('Kandarp');
factoryFun1.here();
console.log(factoryFun1.age);   // can access outside of the function
console.log(factoryFun1);
//define a new method into the factoryFun object
factoryFun1.there = function() {
    console.log("Another Method");
}
console.log(factoryFun1);

let factoryFun2 = factoryFunction('Dave');
console.log(factoryFun2);      //it will not call the there method, because that method is only scoped with factoryFun1 obj, not with other

console.log("--------------------------------------------------------------------------------------------------------")

// Constroctor function
function ConstructiveFun(name, age, role) {

    this.name = name;                      // this refers to the obj of the current function
    this.age = age;
    this.role = role;
    this.funi = function() {

        console.log("Fuction is called for every object");
    }
}

let constructorFun1 = new ConstructiveFun('Kandarp', 21, "Dev");
constructorFun1.funi();
console.log(constructorFun1.role)
console.log(constructorFun1);
//define a new method into the constructorFun object
constructorFun1.funny = function() {
    console.log("One another function")
}
console.log(constructorFun1);

let constructorFun2 = new ConstructiveFun('Name', 2000, 'No');   
console.log(constructorFun2);    // similar to the factoryFun2 obj scenario


//similar to Audio constructor function, relate it with above code, where play will be a fun and file.mp3 is a property
// var sound = new Audio('file.mp3');
// sound.play();

