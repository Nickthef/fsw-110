var greeting = document.getElementById("hi");
var textToAdd = document.createTextNode("adding new text to my h1.");
greeting.appendChild(textToAdd);

console.log(greeting);

