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
        if(String(eval(displayScreen.textContent)).length > 8){
            displayScreen.textContent = eval(displayScreen.textContent).toFixed(7)
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

function managePar(){
    let par = document.querySelectorAll('.parButton');
    par.forEach(elt => elt.addEventListener('click', () =>{
        let value = elt.textContent;
        if(value == '('){
            displayScreen.textContent += value
        }
        else{
            displayScreen.textContent += value
        }
    }))
    
}
managePar()
function eraser(){
    displayScreen.textContent = displayScreen.textContent.slice(0, -1);
}

//Defining a clock for the calculator
function clock(){
    let clock = document.getElementById('clock')
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    function pad(unit){
        return unit < 10 ? '0' + unit : unit;
    }

    hours = pad(hours);
    minutes = pad(minutes);
    seconds = pad(seconds);

    clock.textContent = `${hours}:${minutes}:${seconds}`
}

setInterval(clock, 1000);