var navbar1 = document.createElement("a");
var navbar2 = document.createElement("a");
var navbar3 = document.createElement("a");
var link1 = document.createTextNode("Youtube");
var link2 = document.createTextNode("Twitter");
var link3 = document.createTextNode("Instagram");
navbar1.appendChild(link1);
navbar2.appendChild(link2);
navbar3.appendChild(link3);
navbar1.href = "https:www.youtube.com";
navbar2.href = "https://twitter.com/home?lang=en";
navbar3.href = "https://www.instagram.com/";
document.body.appendChild(navbar1);
document.body.appendChild(navbar2);
document.body.appendChild(navbar3);

var myHeader = document.createElement("h1");
myHeader.textContent = "Welcome To My Website";
var myH1 = document.body;
myH1.appendChild(myHeader);

var myPara = document.createElement("p");
myPara.textContent =
  "My name is Nick, and I am very excited to take the next steps in learning HTML, CSS, and Javascript!";
var myP = document.body;
myP.appendChild(myPara);

var myList1 = document.createElement("li");
var myList2 = document.createElement("li");
var myList3 = document.createElement("li");
myList1.textContent = "Blue";
myList2.textContent = "Green";
myList3.textContent = "Purple";
var myListOne = document.body;
var myListTwo = document.body;
var myListThree = document.body;
myListOne.appendChild(myList1);
myListTwo.appendChild(myList2);
myListThree.appendChild(myList3);

var footer = document.createElement("footer");
footer.textContent = "This is my footer.";
var myFooter = document.body;
myFooter.appendChild(footer);
