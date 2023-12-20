let displayScreen = document.getElementById('displayScreen')
let egal = false;
function appendToDisplay(element){
    if(egal){
        clearDisplay();
        egal = false;
    }
    displayScreen.textContent += element
}

function clearDisplay(){
    displayScreen.textContent = ""
}

function calculate(){
    try{
        console.log()
        if(String(eval(displayScreen.textContent)).length > 7){
            displayScreen.textContent = eval(displayScreen.textContent).toFixed(6)
            egal = true;
        }
        else{
            displayScreen.textContent = eval(displayScreen.textContent)
            egal = true;
        }
    }
    catch(error){
        displayScreen.textContent = "ERROR";
        egal = true;
    }
}

