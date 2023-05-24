function ConstructiveFun(name, age, role) {

    this.name = name;
    this.age = age;
    this.role = role;
    this.fun = function() {

        console.log("Fuction is called for every object");
    }
}

let obj = new ConstructiveFun('Kandarp', 21, "Dev");
obj.fun();

//similar to Audio constructor function, relate it with above code, where play will be a fun and file.mp3 is a property
// var sound = new Audio('file.mp3');
// sound.play();

