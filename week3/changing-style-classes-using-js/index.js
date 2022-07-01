for (i = 0; i < 5; i++) {
    let myH2 = document.createElement("h2");
    myH2.textContent = "Hello, Again!";
    document.body.appendChild(myH2);
    myH2.style.color = "cornflowerblue";
    myH2.style.fontSize = "20px";
    myH2.style.fontWeight = "lighter";
    myH2.style.fontFamily = "sans-serif";
    myH2.setAttribute("class", "border");
}

