// nested callbacks is called callback hell

const callBackHell = (n) => {

    setTimeout(() => {

        console.log("Hell-step 1");
        console.log(n);

        setTimeout((m) => {

            console.log("Hell-step 2");
            console.log(m);

            setTimeout((p) => {

                console.log("Hell-step 3");
                console.log(p);
            }, 2000, m*2);

        }, 2000, n*2);

    }, 2000);

}

callBackHell(5);