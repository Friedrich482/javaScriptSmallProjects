let slides = document.querySelectorAll('.slide');
let admireButton = document.getElementById('admireButton');
let slideIndex = 0;
let intervalId = null;
let pins = document.querySelectorAll('.pinsItem');
let pinIndex = 0;
document.addEventListener('DOMContentLoaded', startSlides);

function startSlides(){
    if(slides.length > 0){
        slides[0].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
        pins[0].classList.add('pinActive');
    }
}

function showSlide(){   
    if(slideIndex >= slides.length){
        slideIndex = 0;
        pinIndex = 0
    }
    else if(slideIndex < 0){
        slideIndex = slides.length - 1
        pinIndex = pins.length - 1;
    }

    slides.forEach(slide =>{
        slide.classList.remove('displaySlide');
        
    })

    pins.forEach(pin =>{
        pin.classList.remove('pinActive')
    })

    slides[slideIndex].classList.add('displaySlide');
    pins[pinIndex].classList.add('pinActive');
}

function prevSlide(){
    slideIndex--;
    pinIndex --
    showSlide();
}

function nextSlide(){
    pinIndex ++
    slideIndex++;
    showSlide();
}

admireButton.addEventListener('click', () =>{
    clearInterval(intervalId)
})