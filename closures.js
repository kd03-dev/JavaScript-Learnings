// if we define a variable globally then any script, function can access it and modify it. So, if we want to deal with function scoped variable and don't want to allow to access it outside of the function, then we need closure
// in closure a function has one insider function, by which we can deal with the outer function. All the stuffs of the outer function is accessible with the inner function
// with the help of the closure, we can't directly access or modify the property of the function. We need to call the inner function using obj to perform such tasks after that we return that function.

function outerFun() {

    let scopedVar = 0;
    function innerFun() {
        
        console.log(scopedVar);
        ++scopedVar;
    }

    return innerFun;
}

const obj = outerFun();    // for outerFun
obj();  // for innerFun
obj();
obj();



function multi1(n) {

    function multi2(m) {

        return n*m;
    }

    return multi2;
}

const obj2 = multi1(3);    
console.log(obj2(4));
