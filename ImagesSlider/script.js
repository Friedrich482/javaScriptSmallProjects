let slides = document.querySelectorAll('.slide');
let admireButton = document.getElementById('admireButton');
let slideIndex = 0;
let intervalId = null;
document.addEventListener('DOMContentLoaded', startSlides);

function startSlides(){
    if(slides.length > 0){
        slides[0].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(){   
    if(slideIndex >= slides.length){
        slideIndex = 0
    }
    else if(slideIndex < 0){
        slideIndex = slides.length - 1
    }
    slides.forEach(slide =>{
        slide.classList.remove('displaySlide')
    })
    slides[slideIndex].classList.add('displaySlide');
}

function prevSlide(){
    slideIndex--;
    showSlide();
}

function nextSlide(){
    slideIndex++;
    showSlide();
}

admireButton.addEventListener('click', () =>{
    clearInterval(intervalId)
})