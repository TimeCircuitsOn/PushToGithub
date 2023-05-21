var count = 3;
var span = document.querySelector("#count");

function like() {
    count++;
    span.innerText = count + " like(s)"
}