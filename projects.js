const track = document.querySelector(".slider-track");



const website_projects = [
  {
    image: "medias/pexels-fabiano-rodrigues-794857-1662298.jpg",
    name: "project 1",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "medias/tebula-logo.jpg",
    name: "project 2",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/b0f0118cc28b12258fc99ec3ca5c7a15.jpg",
    name: "project 3",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/Bulb.jpg",
    name: "project 4",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ',
    name: "project 5",
    description: "This is a project that was done to illustrate perfection",
    links: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ",
  },
  {
    image: "medias/pexels-andrea-prochilo-3062027-23897249.jpg",
    name: "project 6",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias//pexels-francesco-ungaro-1525041.jpg",
    name: "project 7",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image:`medias/White_logo-removebg-preview.png`,
    name: "project 8",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/pexels-pixabay-33545.jpg",
    name: "project 9",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/pexels-saimon-6070046.jpg",
    name: "project 10",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/pexels-jplenio-1146708.jpg",
    name: "project 11",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "./medias/Kyoto-mod-0782.jpg",
    name: "project 12",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
];


let testingHTML = ''
website_projects.forEach((website_project) => {
  testingHTML +=
  `
  <div class="slide">
    <img src="${website_project.image}" alt="${website_project.name}">
    <div class="caption">
      <p>${website_project.description}</p>
      <button onclick="window.open('${website_project.links}')" class="visit-btn">Visit &#10095;</button>
    </div>
  </div>
  `

  const testing_display = document.querySelector('.website-slider .slider-track');
  testing_display.innerHTML = testingHTML;
})






let slides = Array.from(document.querySelectorAll(".slide"));
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");
let planWidth = '';


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

slides.forEach((slide) => {
  planWidth = slide.offsetWidth;  
})

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

  const offset = -(index * planWidth);
  track.style.transform = `translateX(${offset}px)`;
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

document.querySelector(".website-slider").addEventListener("mouseleave", startAutoplay);
document.querySelector(".website-slider").addEventListener("mouseenter", stopAutoplay);

track.style.transition = "transform 0.5s ease-in-out";
updateSlides();
startAutoplay();
