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

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })

    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide(): void{

}

function nextSlide(): void{
    slideIndex++;
    showSlide(slideIndex);
}


