const track = document.querySelector(".slider-track");



const website_projects = [
  {
    image: "medias/around-campus.png",
    video: 'medias/Tebula video.mp4',
    name: "Around Campus",
    description: "This is a project that was done to connect housing agents and customers",
    links: "https://aroundcampus.ng/",
  },
  {
    image: "medias/melben-travelling agency.png",
    video: 'medias/MelBen Travelling Agency video.mp4',
    name: "Melben Travelling Agency",
    description: "This is a project for Travelling Agency across multiple nations",
    links: "https://benevolent-chebakia-1cfb47.netlify.app/",
  },
  {
    image: "medias/quiz-campus.png",
    video: "medias/Dannys Shop video.mp4",
    name: "Quiz Campus",
    description: "This is a project that was done to test and educate university students on their courses",
    links: "https://quiz-campus.vercel.app/questions.html",
  },
  {
    image: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRF2VqJlLsU0sJRFG0uVSUcb72wSLB_lU--6eTGU0_zkQmSYsz398xnprD4BPX55NmRhaza1wsR5WyZxteYdL_QQ2eqQhe-oVE5_QQNXQ',
    video: 'medias/916 video.mp4',
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
    name: "Tebula Logo",
    description: "For a tech company specialized on web-development, UI/UX designs, Graphics designs and Videography",
  },
  {
    image: "medias/Ikhide graphics2.jpg",
    name: "NASSON",
    description: "",
  },
  {
  image:`medias/Ikhide graphics3.jpg`,
  name: "Tola Jewelry Flyer",
  description: ""
  },
  {
  image:`medias/Ikhide graphics4.jpg`,
  name: "Tola Hair Care Flyer",
  description: ""
  },
  {
    image: `medias/Ikhide-graphics1.jpg`,
    name: `Montels Academy Flyer`,
    description: ""
  },
  {
    image: `medias/Ikhide graphics5.jpg`,
    name: `UI Design`,
    description: ""
  },
  {
    image: `medias/Ikhide graphics6.jpg`,
    name: `JMK Logo`,
    description: ""
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
    name: "Addidas touchup Ad",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
    image: "medias/916 video.mp4",
    name: "916 Scents",
    description: "This is a project that was done to illustrate perfection",
    links: "",
  },
  {
  image: "medias/916 video.mp4",
  name: "project 6",
  description: "This is a project that was done to illustrate perfection",
  links: "",
  },
]



let websiteHTML = ''
website_projects.forEach((website_project) => {
  websiteHTML +=
  `
  <div class="slide" onclick= "changingVideo('${website_project.video}','${website_project.name}','${website_project.description}','${website_project.links}')">
    <img src="${website_project.image}" alt="${website_project.name}">
    <div class="writeups">
      <h3>${website_project.name}</h3>
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
  <div class="slide" onclick="changingImage('${graphics_project.image}','${graphics_project.name}', '${graphics_project.description}', '${graphics_project.image}')">
    <img src="${graphics_project.image}" alt="${graphics_project.name}">
    <div class="writeups">
      <h3>${graphics_project.name}</h3>
      <!--<p>${graphics_project.description}</p>--!>
      <button onclick="window.open('${graphics_project.image}')" class="visit-btn">View &#10095;</button>
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
    <video src="${videography_project.image}" alt="${videography_project.name}" class="videos" controls muted ></video>
    <div class="writeups" onclick= "changingVideo('${videography_project.image}','${videography_project.name}','${videography_project.description}','${videography_project.image}')">
    <h3>${videography_project.name}</h3>
      <p>${videography_project.description}</p>
      <button onclick="closingOverlay(); window.open('${videography_project.image}')" class="visit-btn">View &#10095;</button>
    </div>
  </div>
  `


  
  const videography_display = document.querySelector('.videography-slider .slider-track');
  videography_display.innerHTML = videographyHTML;
})

//DISPLAY OVERLAY FOR IMAGES AND VIDEOS

const overlay = document.querySelector('.image-overlay')
const overlay_image = document.querySelector('.overlay-view img');
const overlay_video = document.querySelector('.overlay-view video');
const overlay_title = document.querySelector('.overlay-writeups h3')
const overlay_description = document.querySelector('.overlay-writeups p')
const overlay_button = document.querySelector('.overlay-writeups .visit-btn')

function changingImage(image_source, title, description, link){
  overlay_video.classList.add('disappear');
  overlay_image.src = image_source;
  overlay_image.classList.remove('disappear');
  overlay_title.innerHTML = title;
  overlay_description.innerHTML = description;
  overlay.classList.remove('disappear')
  overlay.classList.add('appear')
};

function changingVideo(video_source, title, description, link){
  overlay_image.classList.add('disappear');
  overlay_video.classList.remove('disappear');
  overlay_video.src = video_source;
  overlay_title.innerHTML = title;
  overlay_description.innerHTML = description;
  overlay.classList.remove('disappear')
  overlay.classList.add('appear')


  //VIEWING BUTTON
  overlay_button.addEventListener("click", () => {
    closingOverlay()
    window.open(`${link}`)
  })
};

const close_btn = document.querySelector('.close-button')

function closingOverlay(){
  overlay.classList.remove('appear')
  overlay.classList.add('disappear')
  overlay_video.src = ''
};





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
