var form = document.getElementById("myForm");

var total = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();
  

  var listItem = document.createElement("li");

  var inputVal = document.getElementById("addNewTask").value;
  var inputVal2 = document.getElementById("addNewTask2").value;

  var text = document.createTextNode(inputVal);
  var text2 = document.createTextNode(" - ");
  var text3 = document.createTextNode("$" + inputVal2);

  listItem.appendChild(text);
  listItem.appendChild(text2);
  listItem.appendChild(text3);

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  listItem.appendChild(deleteButton);

  deleteButton.style.padding = "5px";
  deleteButton.style.borderRadius = "10px";
  deleteButton.style.borderStyle = "none";
  deleteButton.style.backgroundColor = "coral";
  deleteButton.style.color = "white";
  deleteButton.style.transition = "all .2s";
  deleteButton.style.marginLeft = "20px";

  document.getElementById("list").appendChild(listItem);

  deleteButton.onClick = function() {
    var listItemPrice = inputVal2;
    
    listItem.style.display = "none";
    total -= parseFloat(listItemPrice);
    displayTotal.textContent = "Total: $" + total;
  }

  var displayTotal = document.getElementById("total");
  total += parseFloat(inputVal2);
  displayTotal.textContent = "Total: $" + total;

  document.getElementById("myForm").reset();

});
