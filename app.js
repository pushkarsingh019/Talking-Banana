// Creating a reference to the button using javascript
var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output")
var serverUrl = "https://api.funtranslations.com/translate/minion.json";

// Processing
function urlGenerator(text) {
    return  serverUrl + "?text=" + text;
}
function errorHandler(error){
    console.log("Error occured", error)
    alert("Something went wrong, please try again later");
}

// Adding Event listener
btnTranslate.addEventListener("click", function eventHandler() {
    var url = urlGenerator(txtInput.value)
    fetch(url)
    .then(response => response.json())
    .then(json => {
        {
            var translatedText = json.contents.translated
            txtOutput.innerHTML = translatedText;
        }
    })
    .catch(errorHandler)
})



















// Live Exercise  --> Query Selector
/* 
1. document.querySelector("textarea")
2. document.querySelector(".btn-primary")
3. document.querySelector("input-btn")
4. document.querySelector("input[name = "translator"]")
*/

