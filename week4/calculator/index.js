const addNum1 = document.getElementById("addNum1");
const addNum2 = document.getElementById("addNum2");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", addition);

function addition() {
    const result = parseInt(addNum1.value) + parseInt(addNum2.value);
    const myP = document.querySelector(".p1");
    myP.textContent = result;
}

const subNum1 = document.getElementById("subNum1");
const subNum2 = document.getElementById("subNum2");
const subBtn = document.getElementById("subBtn");

subBtn.addEventListener("click", subtraction);

function subtraction() {
    const result = parseInt(subNum1.value) - parseInt(subNum2.value);
    const myP2 = document.querySelector(".p2");
    myP2.textContent = result;
}

const mulNum1 = document.getElementById("mulNum1");
const mulNum2 = document.getElementById("mulNum2");
const mulBtn = document.getElementById("mulBtn");

mulBtn.addEventListener("click", multiply);

function multiply() {
    const result = parseInt(mulNum1.value) * parseInt(mulNum2.value);
    const myP3 = document.querySelector(".p3");
    myP3.textContent = result;
}

const divNum1 = document.getElementById("divNum1");
const divNum2 = document.getElementById("divNum2");
const divBtn = document.getElementById("divBtn");

divBtn.addEventListener("click", divide);

function divide() {
    const result = parseInt(divNum1.value) / parseInt(divNum2.value);
    const myP4 = document.querySelector(".p4");
    myP4.textContent = result;
}