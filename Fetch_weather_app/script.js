let weatherForm = document.getElementById('weatherForm')
let card = document.getElementById('card')
let apiKey = "2232101b7a4c133da51de8620fc86462"

weatherForm.addEventListener('submit', async (event) =>{
    event.preventDefault()
    let cityEntered = document.getElementById('cityEntered').value;
    if(cityEntered == ''){
        displayError('Please enter a city  🏙️ !');
        return ;
    }
    
    try{
        let response = await fetchData(cityEntered);
        console.log(response)
    }

    catch(error){
        displayError(error)
    } 
})

async function fetchData(city){
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let response = await fetch(ApiUrl);
    
    if(!response.ok){
        throw new Error("Couldn't fetch data. Try again ❌")
    }
    else{
        return await response.json()
    }
}

function displayError(error){
    let errorDisplay = document.getElementById('errorDisplay')
    errorDisplay.textContent = error;
    errorDisplay.style.fontFamily = 'MV Boli';
    errorDisplay.style.fontSize = '20px'
    errorDisplay.style.color = 'red';
    card.appendChild(errorDisplay);
}

function displayData(data){

}

function displayEmoji(){
   
}