// Mobile navigation toggle
const navToggle = document.getElementById("navToggle");
const navMobile = document.getElementById("navMobile");

if (navToggle && navMobile) {
  navToggle.addEventListener("click", () => {
    navMobile.classList.toggle("open");
  });
}

// Simple enquiry handler (used on contact page)
function handleEnquiry(event) {
  if (event) event.preventDefault();
  alert(
    "Thank you! Your enquiry has been received.\n\nChitrakoot Express team will contact you on your phone number."
  );
  if (event && event.target) {
    event.target.reset();
  }
}

/* IMAGE SLIDER (Home Page) */
let slides = document.querySelectorAll(".home-slider .slide");
let currentSlide = 0;

function showSlide(index) {
  if (!slides || slides.length === 0) return;
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) slide.classList.add("active");
  });
}

function nextSlide() {
  if (!slides || slides.length === 0) return;
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  if (!slides || slides.length === 0) return;
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

if (slides && slides.length > 0) {
  setInterval(nextSlide, 3000);
}

/* FILTER STATIONS (Network Page) */
function filterStations(type) {
  let buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((b) => b.classList.remove("active"));

  if (type === "ne") buttons[0]?.classList.add("active");
  else if (type === "bihar") buttons[1]?.classList.add("active");
  else buttons[2]?.classList.add("active");

  let cards = document.querySelectorAll(".station-card");
  cards.forEach((card) => {
    card.classList.remove("hide");

    if (type === "ne" && !card.classList.contains("ne")) {
      card.classList.add("hide");
    }

    if (type === "bihar" && !card.classList.contains("bihar")) {
      card.classList.add("hide");
    }
  });
}

/* STATS COUNTER (Home Page) */
function animateCounters() {
  const counters = document.querySelectorAll(".stat-number");
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"), 10);
    let current = 0;
    const duration = 1500; // ms
    const step = Math.max(1, Math.floor(target / (duration / 30)));

    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      counter.textContent = current;
    }, 30);
  });
}

document.addEventListener("DOMContentLoaded", animateCounters);
