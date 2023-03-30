var count = 3
var countElement = document.querySelector("#count")

function counterFunc() {
    count++;
    countElement.innerText = count + " like(s)";
}