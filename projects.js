const track = document.querySelector(".slider-track");



const website_projects = [
  {
    image: "medias/around-campus.png",
    name: "project 1",
    description: "This is a project that was done to illustrate perfection",
    links: "https://aroundcampus.ng/",
  },
  {
    image: "./medias/melben-travelling agency.png",
    name: "project 3",
    description: "This is a project that was done to illustrate perfection",
    links: "https://benevolent-chebakia-1cfb47.netlify.app/",
  },
  {
    image: "./medias/quiz-campus.png",
    name: "project 4",
    description: "This is a project that was done to illustrate perfection",
    links: "https://quiz-campus.vercel.app/questions.html",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ',
    name: "project 5",
    description: "This is a project that was done to illustrate perfection",
    links: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ",
  },
  
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
  // {
  //   image: "./medias/Rolls Royce.jpg",
  // },
];


const graphics_projects = [
  {
    image: "medias/tebula-logo.jpg",
    name: "project 2",
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
  {
  image:`medias/White_logo-removebg-preview.png`,
  name: "project 8",
  description: "This is a project that was done to illustrate perfection",
  links: "",
  },
]


const videography_projects = [
  {
    image: "medias/Background video - Made with Clipchamp.mp4",
    name: "project 7",
    description: "This is a project that was done to illustrate perfection",
    links: "https://drive.google.com/uc?export=download&id=1GtSapNLwYbvVVcf5S0pzA_y9NnGVmat3",
  },
  {
    image: "medias/Adidas commercial .mp4",
    name: "project 9",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "medias/Mercedes-AMG GLE 63 S 4MATIC+ (2020)： World Premiere ｜ Trailer.mp4",
    name: "project 10",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
  image: "medias/Mercedes-Benz GLE Coupé (2020)_ World Premiere _ Trailer.mp4",
  name: "project 6",
  description: "This is a project that was done to illustrate perfection",
  links: "",
  },
]



let websiteHTML = ''
website_projects.forEach((website_project) => {
  websiteHTML +=
  `
  <div class="slide">
    <img src="${website_project.image}" alt="${website_project.name}">
    <div class="caption">
      <p>${website_project.description}</p>
      <button onclick="window.open('${website_project.links}')" class="visit-btn">Visit &#10095;</button>
    </div>
  </div>
  `

  const website_display = document.querySelector('.website-slider .slider-track');
  website_display.innerHTML = websiteHTML;
})


let graphicsHTML = ''
graphics_projects.forEach((graphics_project) => {
  graphicsHTML += 
  `
  <div class="slide">
    <img src="${graphics_project.image}" alt="${graphics_project.name}">
    <div class="caption">
      <p>${graphics_project.description}</p>
      <button onclick="window.open('${graphics_project.links}')" class="visit-btn">Visit &#10095;</button>
    </div>
  </div>
  `
  
  const graphic_display = document.querySelector('.graphics-slider .slider-track');
  graphic_display.innerHTML = graphicsHTML;
})


let videographyHTML = ''
videography_projects.forEach((videography_project) => {

  videographyHTML += 
  `
  <div class="slide">
    <video src="${videography_project.image}" alt="${videography_project.name}" class="videos" controls muted></video>
    <div class="writeups">
      <p>${videography_project.description}</p>
      <button onclick="window.open('${videography_project.image}')" class="visit-btn">View</button>
    </div>
  </div>
  `


  
  const videography_display = document.querySelector('.videography-slider .slider-track');
  videography_display.innerHTML = videographyHTML;
})




document.querySelectorAll(".slider").forEach((slider) => {
  const track = slider.querySelector(".slider-track");
  const slides = slider.querySelectorAll(".slide");
  const prevBtn = slider.querySelector(".prev");
  const nextBtn = slider.querySelector(".next");
  const dotsContainer = slider.querySelector(".dots");
  let index = 1;
  let autoPlay;

  // Clone first and last slide for seamless loop
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[slides.length - 1].cloneNode(true);
  track.appendChild(firstClone);
  track.insertBefore(lastClone, slides[0]);

  const allSlides = slider.querySelectorAll(".slide");

  // Create dots
  slides.forEach((slide, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.addEventListener("click", () => {
      index = i + 1; // account for clone offset
      updateSlides();
    });
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  function getSlidesPerView() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateSlides(transition = true) {
    if(window.innerWidth <= 768){
      allSlides.forEach((s) => s.classList.remove("active"));
      allSlides[index-1].classList.add("active")
    }else if(window.innerWidth <= 1024){
      allSlides.forEach((s) => s.classList.remove("active"));
      allSlides[index-1].classList.add("active")
    }else{
      allSlides.forEach((s) => s.classList.remove("active"));
      allSlides[index].classList.add("active");}

    const slidesPerView = getSlidesPerView();
    const offset = -(index - 1) * (100 / slidesPerView);
    track.style.transition = transition ? "transform 0.5s ease" : "none";
    track.style.transform = `translateX(${offset}%)`;

    dots.forEach((d) => d.classList.remove("active"));
    dots[(index - 1 + slides.length) % slides.length].classList.add("active");
  }

  function nextSlide() {
    index++;
    updateSlides();
    if (index === allSlides.length - 1) {
      setTimeout(() => {
        index = 1;
        updateSlides(false);
      }, 500);
    }
  }

  function prevSlide() {
    index--;
    updateSlides();
    if (index === 0) {
      setTimeout(() => {
        index = allSlides.length - 2;
        updateSlides(false);
      }, 500);
    }
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  // Clicking a slide moves it into focus
  allSlides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      index = i;
      updateSlides();
    });
  });

  // Autoplay
  function startAutoPlay() {
    autoPlay = setInterval(nextSlide, 3000);
  }
  function stopAutoPlay() {
    clearInterval(autoPlay);
  }
  slider.addEventListener("mouseenter", stopAutoPlay);
  slider.addEventListener("mouseleave", startAutoPlay);
  startAutoPlay();

  // Swipe support
  let startX = 0;
  track.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAutoPlay(); // pause while swiping
  });
  track.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) nextSlide();
    if (endX - startX > 50) prevSlide();
    startAutoPlay(); // resume after swipe
  });

  updateSlides(false);
  window.addEventListener("resize", () => updateSlides(false));
});
