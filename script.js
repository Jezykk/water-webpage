var nav = document.querySelector(".navbar");
var initialOffset = nav.getBoundingClientRect().top + window.scrollY;

function handleScroll() {
  if (window.scrollY === initialOffset) {
    nav.classList.remove("sticky");
  } else {
    nav.classList.add("sticky");
  }
}
window.addEventListener("scroll", handleScroll);

//-----------------------EMAIL MESSAGE FUNCTION---------------------------------//
var messageButton = document.getElementById('submit-btn');
var messageAlert = document.querySelector(".afterButtonInfo");

function showMessage(){
  messageAlert.style.display = "block";
}
function resetMessage(){
  messageAlert.style.display = "none";
}
messageButton.onclick = showMessage;

messageButton.addEventListener("click", function(){
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("subject").value="";
  setTimeout(resetMessage, 6000);
})

const textOne = document.querySelectorAll(".text-water");
const textTwo = document.querySelectorAll(".about-us-desc");
const pictures = document.querySelectorAll(".about-us-icons");

window.addEventListener("scroll", appearOnScroll);

function appearOnScroll() {
  //298 right text and -200 about-us
  let windowHeight = window.innerHeight;

  for (let i = 0; i < textTwo.length; i++) {
    let textPosition = textTwo[i].getBoundingClientRect().top;

    if (windowHeight > textPosition && nav.classList.contains("sticky")) {
      textOne[i].classList.remove("right-slide");
      textTwo[i].classList.add("left-slide");
      pictures[i].classList.add("showIcons");
    } else {
      textOne[i].classList.add("right-slide");
      textTwo[i].classList.remove("left-slide");
      pictures[i].classList.remove("showIcons");
    }
  }
}


const images = ['photo/Gallery/2_photo.jpg', 'photo/Gallery/3_photo.jpg', 'photo/Gallery/4_photo.jpg']; // Lista ścieżek do obrazków
const titles = ['Ibiza', 'Bali', 'Kauai']; // Lista tytułów
const descriptions = [
            'Dive into a world where azure waters meet endless horizons, and the vibrant marine life awaits your discovery. Ibiza offers a unique playground for free divers, with its crystal-clear waters and hidden underwater treasures. Whether you\'re a seasoned free diver or a curious beginner, the island\'s diverse underwater landscapes promise an unforgettable adventure.',
            'Explore the depths of Balis underwater wonderland with the exhilarating experience of free diving! Nestled in the heart of the Indonesian archipelago, Bali offers a paradise for those seeking to connect with the ocean in an intimate and thrilling way. Dive into the crystal-clear waters of Bali, where vibrant coral reefs teem with an incredible diversity of marine life. From colorful fish to majestic manta rays, youll witness the beauty of the underwater world up close and personal. Free diving allows you to become one with the ocean, experiencing the sensation of weightlessness and the harmony of silence.',
            'Jeden chuj'
        ]; // Lista opisów

        const sliderImage = document.getElementById('slider-image');
        const sliderTitle = document.getElementById('slider-title');
        const desc = document.getElementById('desc');
        const controlNext = document.querySelector('.control_next');
        const controlPrev = document.querySelector('.control_prev');

        let currentIndex = 0;

        // Funkcja do zmiany zawartości slidera na następny element
        function nextSlide() {
            currentIndex = (currentIndex + 1) % images.length;
            updateSlider();
        }

        // Funkcja do zmiany zawartości slidera na poprzedni element
        function prevSlide() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateSlider();
        }

        // Funkcja do aktualizacji zawartości slidera
        function updateSlider() {
            sliderImage.src = images[currentIndex];
            sliderTitle.textContent = titles[currentIndex];
            desc.textContent = descriptions[currentIndex];
        }

        // Dodaj obsługę kliknięć na przyciski "Next" i "Prev"
        controlNext.addEventListener('click', nextSlide);
        controlPrev.addEventListener('click', prevSlide);

        // Uruchom początkową zawartość slidera
        updateSlider();