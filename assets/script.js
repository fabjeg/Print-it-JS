const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",

    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },

  {
    image: "./assets/images/slideshow/slide2.jpg",

    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },

  {
    image: "./assets/images/slideshow/slide3.jpg",

    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },

  {
    image: "./assets/images/slideshow/slide4.png",

    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// variables

const dots = document.querySelector(".dots");

const clickright = document.querySelector(".arrow_right");

const clickleft = document.querySelector(".arrow_left");

const img = document.querySelector("#banner img");

const tagLine = document.querySelector("#banner p");

let index = 0;

// affichage des points

function displaydots() {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");

    dot.classList.add("dot");

    dots.appendChild(dot);

    if (i === index) {
      dot.classList.add("dot_selected");
    }
  }
}

function handleClick(direction) {
  const slidesdots = document.querySelectorAll(".dots .dot");

  slidesdots[index].classList.remove("dot_selected");

  if (direction === "right") {
    index = index == 3 ? 0 : index + 1;
  } else if (direction === "left") {
    index--;

    if (index < 0) {
      index = slides.length - 1;
    }
  }

  slidesdots[index].classList.add("dot_selected");

  img.src = slides[index].image;

  tagLine.innerHTML = slides[index].tagLine;
}

//clique droit

function arrowright() {
  clickright.addEventListener("click", (event) => handleClick("right"));
}
//clique gauche

function arrowleft() {
  clickleft.addEventListener("click", (event) => handleClick("left"));
}

clickright.addEventListener("click", (event) => {
  console.log("je suis dans le click droit", event);
});

clickleft.addEventListener("click", (event) => {
  console.log("je suis dans le click gauche", event);
});

displaydots();
arrowright();
arrowleft();
