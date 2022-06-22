var newH1 = document.createElement("h1");
var myHeader = document.body;
myHeader.prepend(newH1);
newH1.textContent = "Welcome to my JS site";


var newP = document.createElement("p");
var myPara = document.body;
myPara.appendChild(newP);
newP.textContent = "All of this was created with Javascript";

var newLi = document.createElement("li");
var newLi1 = document.createElement("li");
var newLi2 = document.createElement("li");

var myList = document.getElementById("my-list");

myList.appendChild(newLi);
myList.appendChild(newLi1);
myList.appendChild(newLi2);
newLi.textContent = "Green";
newLi1.textContent = "Purple";
newLi2.textContent = "Orange";
