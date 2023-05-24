let commonUsedWord = document.querySelectorAll(".drum");

let len = commonUsedWord.length;

let drumLetterSound = (letter) => {

    let audio = new Audio("sounds/" + letter.trim() +".mp3");
    audio.play();
}

for(let i=0; i<len; ++i) {
    
    commonUsedWord[i].addEventListener("click", () => {

        drumLetterSound(commonUsedWord[i].textContent);
    });
}



