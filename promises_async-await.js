// to overcome from the callback hell we can use the promises and async await

function maggi() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let readyWater = "yes";
            console.log("water is ready");
            resolve(readyWater);
        }, 2000); 
    }); 
}

function boilingMaggy() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let boilWater = "yes";
            console.log("water is boiled");
            resolve(boilWater);
        }, 2000);
    });
}

function maggiReady() {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            let eat = "yes";
            console.log("eat a maggi");
            resolve(eat);
        }, 2000);
    });
}


