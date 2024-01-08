let weatherForm = document.getElementById('weatherForm')
let card = document.getElementById('card')
let apiKey = "2232101b7a4c133da51de8620fc86462"

weatherForm.addEventListener('submit', async (event) =>{
    event.preventDefault()
    let cityEntered = document.getElementById('cityEntered').value;
    console.log(cityEntered)
    await fetchData(cityEntered)
})


async function fetchData(city){
    let ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let response = await fetch(ApiUrl);
    
    if(!response.ok){
        throw new Error("Couldn't fetch data. Try again ❌")
    }
    else{
        response = await response.json()
        console.log(response)
    }
}


// fetchData(cityEntered)
function displayError(){

}

function displayData(data){

}

function displayEmoji(){

}