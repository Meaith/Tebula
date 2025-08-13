const track = document.querySelector(".slider-track");



const projects = [
  {
    image: "medias/pexels-fabiano-rodrigues-794857-1662298.jpg",
    name: "project 1",
  },
  {
    image: "medias/tebula-logo.jpg",
    name: "project 2",
  },
  {
    image: "./medias/b0f0118cc28b12258fc99ec3ca5c7a15.jpg",
    name: "project 3",
  },
  {
    image: "./medias/Bulb.jpg",
    name: "project 4",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ',
    name: "project 5",
  },
  {
    image: "medias/pexels-andrea-prochilo-3062027-23897249.jpg",
    name: "project 6",
  },
  {
    image: "./medias//pexels-francesco-ungaro-1525041.jpg",
    name: "project 7",
  },
  {
    image:`medias/White_logo-removebg-preview.png`,
    name: "project 8",
  },
  {
    image: "./medias/pexels-pixabay-33545.jpg",
    name: "project 9",
  },
  {
    image: "./medias/pexels-saimon-6070046.jpg",
    name: "project 10",
  },
  {
    image: "./medias/pexels-jplenio-1146708.jpg",
    name: "project 11",
  },
  {
    image: "./medias/Kyoto-mod-0782.jpg",
    name: "project 12",
  },
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
];


let testingHTML = ''
projects.forEach((project) => {
  testingHTML +=
  `
  <div class="slide">
    <img src="${project.image}" alt="${project.name}">
    <div class="caption">Beautiful mountains in spring</div>
  </div>
  `

  const testing_display = document.querySelector('.slider-track');
  testing_display.innerHTML = testingHTML;
})






let slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 1;
let autoplayInterval;
let isAnimating = false;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, slides[0]);

slides = Array.from(document.querySelectorAll(".slide"));
const slideCount = slides.length;
const originalCount = slideCount - 2;
const slideWidth = 100 / 3;

// Dots
for (let i = 0; i < originalCount; i++) {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (i === 0) dot.classList.add("active");
  dot.addEventListener("click", () => goToSlide(i + 1));
  dotsContainer.appendChild(dot);
}

function updateDots() {
  document.querySelectorAll(".dot").forEach((dot, i) => {
    dot.classList.toggle("active", i === ((index - 1 + originalCount) % originalCount));
  });
}

function updateSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));

  let centerIndex = index + 1;
  if (centerIndex >= slides.length) centerIndex = 0;
  if (centerIndex < 0) centerIndex = slides.length - 1;

  slides[centerIndex].classList.add("active");

  const offset = -(index * slideWidth);
  track.style.transform = `translateX(${offset}%)`;
  updateDots();
}

function goToSlide(i) {
  if (isAnimating) return;
  isAnimating = true;
  index = i;
  updateSlides();
}

function nextSlide() {
  if (isAnimating) return;
  isAnimating = true;
  index++;
  updateSlides();
}

function prevSlide() {
  if (isAnimating) return;
  isAnimating = true;
  index--;
  updateSlides();
}

track.addEventListener("transitionend", () => {
  if (slides[index].isSameNode(firstClone)) {
    track.style.transition = "none";
    index = 1;
    updateSlides();
    setTimeout(() => (track.style.transition = "transform 0.5s ease-in-out"));
  }
  if (slides[index].isSameNode(lastClone)) {
    track.style.transition = "none";
    index = slideCount - 2;
    updateSlides();
    setTimeout(() => (track.style.transition = "transform 0.5s ease-in-out"));
  }
  isAnimating = false;
});

// Click adjacent slide
slides.forEach((slide, i) => {
  slide.addEventListener("click", () => {
    if (i === index + 1) return; // already active
    if (i === index) prevSlide();
    else if (i === index + 2) nextSlide();
  });
});

// Buttons
prevBtn.addEventListener("click", prevSlide);
nextBtn.addEventListener("click", nextSlide);

// Swipe
let startX = 0;
track.addEventListener("touchstart", (e) => startX = e.touches[0].clientX);
track.addEventListener("touchend", (e) => {
  let endX = e.changedTouches[0].clientX;
  if (endX < startX - 50) nextSlide();
  if (endX > startX + 50) prevSlide();
});

// Autoplay
function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 3000);
}
function stopAutoplay() {
  clearInterval(autoplayInterval);
}

document.querySelector(".slider").addEventListener("mouseenter", stopAutoplay);
document.querySelector(".slider").addEventListener("mouseleave", startAutoplay);

track.style.transition = "transform 0.5s ease-in-out";
updateSlides();
startAutoplay();
