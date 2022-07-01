var myH1 = document.createElement("h1");
myH1.textContent = "Hello World";
document.body.appendChild(myH1);

for (i = 0; i < 10; i++) {
   var myH1 = document.createElement("h1");
   myH1.textContent = "Hello World";
   myH1.style.color = "red"
   document.body.appendChild(myH1);
}

const names = ["steve", "larry", "joe", "shirley", "nate", "rick", "emily"];

for (i = 0; i < names.length; i++) {
   document.getElementById("demo").innerHTML = names;
}