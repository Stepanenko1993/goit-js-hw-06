
const inputValue = document.getElementById("font-size-control")
const textInput = document.getElementById("text")


inputValue.oninput = function () {
    
    textInput.style.fontSize = inputValue.value + "px";
}