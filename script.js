// Theme toggle
const btn = document.getElementById('theme-toggle');
const html = document.documentElement;
if(localStorage.getItem('theme')==='dark') {
  html.classList.add('dark');
  btn.textContent='☀️';
}
btn.addEventListener('click',()=>{
  html.classList.toggle('dark');
  const dark=html.classList.contains('dark');
  btn.textContent=dark?'☀️':'🌙';
  localStorage.setItem('theme', dark?'dark':'light');
});

// Hamburger toggle
const hamb = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamb.addEventListener('click',()=> nav.classList.toggle('open'));

// Page transition
window.addEventListener('load', ()=> document.body.classList.add('loaded'));

// Initialize AOS animations
document.addEventListener('DOMContentLoaded', () => AOS.init({ once: true }));

// Smooth scroll fallback (optional)
document.querySelectorAll('a[href^="#"]').forEach(link=>{
  link.addEventListener('click', e=>{
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
    nav.classList.remove('open');
  });
});

//subscription plans
// Monthly vs Yearly toggle
function toggleBillingUI(element) {
  element.classList.toggle('active');
  const isYearly = element.classList.contains('active');
  const prices = document.querySelectorAll('.price');

  prices.forEach(price => {
    const monthly = price.getAttribute('data-monthly');
    const yearly = price.getAttribute('data-yearly');
    if (monthly && yearly) {
      price.innerHTML = isYearly
        ? yearly + '<span>/year</span>'
        : monthly + '<span>/month</span>';
    }
  });
}

// checkout function
 function goToCheckout(plan) {
      window.location.href = `checkout-page.html?plan=${encodeURIComponent(plan)}`;
    }




// Carousel setup
const memorial_track = document.querySelector('.carousel-track');
const memorial_slides = Array.from(memorial_track.children);
const nextButton = document.querySelector('.review-next');
const prevButton = document.querySelector('.review-prev');

let memorial_slideWidth = memorial_slides[0].getBoundingClientRect().width;
let currentIndex = 0;

// Arrange the slides next to each other
function setSlidePosition() {
  memorial_slideWidth = memorial_slides[0].getBoundingClientRect().width;
  memorial_slides.forEach((slide, index) => {
    slide.style.left = memorial_slideWidth * index + 'px';
  });
}
setSlidePosition();

window.addEventListener('resize', () => {
  setSlidePosition();
  moveToSlide(currentIndex);
});

// Move to slide function
function moveToSlide(index) {
  if (index < 0) {
    currentIndex = memorial_slides.length - visibleSlides();
  } else if (index > memorial_slides.length - visibleSlides()) {
    currentIndex = 0;
  } else {
    currentIndex = index;
  }
  const amountToMove = memorial_slides[currentIndex].style.left;
  memorial_track.style.transform = 'translateX(-' + amountToMove + ')';
}

// Calculate how many slides visible
function visibleSlides() {
  if(window.innerWidth <= 600) return 1;
  if(window.innerWidth <= 900) return 2;
  return 3;
}

// Button event listeners
nextButton.addEventListener('click', () => {
  moveToSlide(currentIndex + 1);
});

prevButton.addEventListener('click', () => {
  moveToSlide(currentIndex - 1);
});

// Auto slide every 5 seconds
let autoSlideInterval = setInterval(() => {
  moveToSlide(currentIndex + 1);
}, 5000);

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    moveToSlide(currentIndex + 1);
  }, 5000);
}

nextButton.addEventListener('click', resetAutoSlide);
prevButton.addEventListener('click', resetAutoSlide);

// Initialize position
moveToSlide(0);
