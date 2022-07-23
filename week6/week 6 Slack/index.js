function concat(str1, str2) {
    return str1.concat(str2);
}
console.log(concat("hotdog", "hamburger"));

function indexOf(str) {
    return str.indexOf("o");
}
console.log(indexOf("computer"));

function lastIndexOf(str) {
    return str.lastIndexOf("e");
}
console.log(lastIndexOf("Elephant"));

var strA = "Jake bought a rake and ate steak and it was his fate."
function match(str) {
    return str.match(/ate/);
}
console.log(match(strA));

var strA = "The plain jane, walked down marry lane."
function replace(str) {
    return str.replace(/jane/g, "John");
}
console.log(replace(strA));

var myString = "watermelon";
function slice(str) {
    return str.slice(0, 5);
}
console.log(slice(myString));

var myStringA = "Hello world, this is a lesson on string methods."
function split(str) {
    return str.split(" ");
}
console.log(split(myStringA));

var myStringB = "Basketball";
function toUpperCase(str) {
    return str.toUpperCase();
}
console.log(toUpperCase(myStringB));

var myStringC = "Football";
function toLowerCase(str) {
    return str.toLowerCase();
}
console.log(toUpperCase(myStringC));

var myStringD = "Cocomelon";
function substr(str) {
    return str.substr(1, 4);
}
console.log(substr(myStringD));
