var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#input-text");
var txtOutput = document.querySelector("#div-output");

var serverURL = "https://api.funtranslations.com/translate/yoda.json";

function getTranslationURL(text) {
    return serverURL + "?" + "text= " + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after sometime");
}



function clickbtnHandler() {

    var inputText = txtInput.value;


    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            txtOutput.innerText = translatedText;

        })
}


btnTranslate.addEventListener("click", clickbtnHandler)