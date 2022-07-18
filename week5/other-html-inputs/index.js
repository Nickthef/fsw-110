const form = document.myForm;

const checka = document.getElementById("check1");
const checkb = document.getElementById("check2");
const checkc = document.getElementById("check3");




form.addEventListener("submit", (event) => {
  event.preventDefault()

  var myArr = [];

  if (check1.checked) {
    myArr.push(checka.value);
  }

  if (check2.checked) {
    myArr.push(checkb.value);
  }

  if (check3.checked) {
    myArr.push(checkc.value);
  }
  
  alert("First Name: " + form.fname.value + "\n" + "Last Name: " + form.lname.value + "\n" + "Age: " + form.age.value + "\n" + "Shopped with us before: " + form.decision.value + "\n" + "How Likely: " + form.firstQuestion.value + "\n" + "Allergies: " + myArr)
})
