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

let projectHTML = ''


projects.forEach((project) => {
  projectHTML += 
  `
  <div 
    class="portfolio-item" 
    style="background-image: url(${project.image});">
    ${project.name}
  </div>
  `

  const display = document.querySelector('.portfolio-grid')
  display.innerHTML = projectHTML;
})


