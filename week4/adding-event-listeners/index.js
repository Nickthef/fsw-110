const myID = document.getElementById("square");

window.addEventListener("load", turnBlack);
myID.addEventListener("mouseover", mouseOver);
myID.addEventListener("mousedown", mouseDown);
myID.addEventListener("mouseup", mouseUp);
myID.addEventListener("dblclick", double);
window.addEventListener("wheel", onwheel);
window.addEventListener("keydown", keyDown);

function turnBlack() {
    document.querySelector("#square").style.backgroundColor = "black";
}

function mouseOver() {
    myID.style.backgroundColor = "green";
}

function mouseDown() {
    myID.style.backgroundColor = "yellow";
}

function mouseUp() {
    myID.style.backgroundColor = "blue";
}

function double() {
    myID.style.backgroundColor = "red";
}

function onwheel() {
    myID.style.backgroundColor = "purple";
}

function keyDown(e) {
    if (e.which == 82) {
        myID.style.backgroundColor = "red";
    } else if (e.which == 66) {
        myID.style.backgroundColor = "blue";
    } else if (e.which == 71) {
        myID.style.backgroundColor = "green";
    }
}
