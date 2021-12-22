// Creating a reference to the button using javascript
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")

// Adding Event listener
btnTranslate.addEventListener("click", function eventHandler() {
    txtOutput.innerHTML = txtInput.value;

})


// Live Exercise  --> Query Selector
/* 
1. document.querySelector("textarea")
2. document.querySelector(".btn-primary")
3. document.querySelector("input-btn")
4. document.querySelector("input[name = "translator"]")
*/

