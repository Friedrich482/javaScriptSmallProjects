let body = document.getElementById('body');
let round = document.getElementById('round');
let checkLabel = document.getElementById('checkLabel');
let title = document.getElementById('displayTitle');
let switched = false;
let sun = document.getElementById('sun');

checkLabel.addEventListener('click', () =>{
    
    if(!switched){
        checkLabel.style.justifyContent = 'end';
        sun.src = 'moon.jpg';
        sun.style.borderRadius = '2px';
        body.style.backgroundColor = 'rgba(20, 20, 20, 0.963)';
        round.style.backgroundColor = 'rgba(255, 254, 254, 0.999)';
        checkLabel.style.backgroundImage = 'url("moon_font.jpg")';
        checkLabel.style.border = '3px solid hsl(184, 65%, 65%)';
        title.textContent = 'Actual mode : night';
        title.style.color = 'lightblue';
        switched = true;
    }

    else{
        checkLabel.style.justifyContent = 'start';
        sun.src = 'sun.jpg';                                     
        body.style.backgroundColor = 'skyblue';
        round.style.backgroundColor = 'rgb(10, 10, 10)';
        checkLabel.style.backgroundImage = 'url("sun_font.jpg")';
        checkLabel.style.border = '3px solid rgba(9, 49, 62, 0.92)';
        title.textContent = 'Actual mode : day';
        title.style.color = 'hsl(230, 85%, 60%)';
        switched = false;
    }
    
})