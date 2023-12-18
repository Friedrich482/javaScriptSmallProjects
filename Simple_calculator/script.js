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
        displayScreen.textContent = eval(displayScreen.textContent)
        egal = true;    
    }
    catch(error){
        displayScreen.textContent = "ERROR";
        egal = true;
    }
}
