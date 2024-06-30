const slides = document.querySelectorAll(".slides img");
let slideIndex: number = 0;
let intervalId: any = null;

document.addEventListener("DOMContentLoaded",initializeSlider);

function initializeSlider(): void{

    if(slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index: number): void{

    if(index >= slides.length)    {
        slideIndex = 0;
    }   else if(index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(): void{

    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);

}

function nextSlide(): void{

    slideIndex++;
    showSlide(slideIndex);
}


