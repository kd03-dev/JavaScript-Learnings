let count=0;

document.getElementById("incre").onclick = function() {

    ++count;
    document.getElementById("number").innerHTML=count;
}

document.getElementById("reset").onclick = function() {

    count=0;
    document.getElementById("number").innerHTML=count;
}

document.getElementById("decre").onclick = function() {

    --count;
    document.getElementById("number").innerHTML=count;
}