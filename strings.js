let myName = "Kandarp Dave";

//string class contains many methods
// let firstName = myName.slice(0,myName.indexOf(" "));
// let lastName = myName.slice(myName.indexOf(" ")+1);

//console.log(firstName+ " " + lastName);

//method chaining 
let words = " kandarp dave ";
words=words.trim();
let firstName = words.slice(0,words.indexOf(" ")).replace(words.charAt(0),words.charAt(0).toUpperCase());
let secondName = words.slice(words.indexOf(" ")+1).replace(words.charAt(words.indexOf(" ")+1),words.charAt(words.indexOf(" ")+1).toUpperCase());
console.log(firstName + " " + secondName);