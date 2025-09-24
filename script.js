// nav
  const menuToggle = document.getElementById('menu-toggle');
  const navList = document.getElementById('nav-list');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active');
  });




//Slider
const slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
const nextbtn = document.getElementById("next");
const prevbtn = document.getElementById("prev");

let index = 1;
let allowTransition = true;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";

slider.appendChild(firstClone);
slider.insertBefore(lastClone, slides[0]);

slides = document.querySelectorAll(".slide");

slider.style.transform = `translateX(-${index * 100}%)`;

function moveToSlide(i) {
  if (!allowTransition) return;
  allowTransition = false;
  index = i;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = `translateX(-${index * 100}%)`;
}

slider.addEventListener("transitionend", () => {
  if (slides[index].id === "last-clone") {
    slider.style.transition = "none";
    index = slides.length - 2;
    slider.style.transform = `translateX(-${index * 100}%)`;
  } else if (slides[index].id === "first-clone") {
    slider.style.transition = "none";
    index = 1;
    slider.style.transform = `translateX(-${index * 100}%)`;
  }
  allowTransition = true;
});

nextbtn.addEventListener("click", () => moveToSlide(index + 1));
prevbtn.addEventListener("click", () => moveToSlide(index - 1));

setInterval(() => {
  moveToSlide(index + 1);
}, 4000);

// Hover sync: when image hovered, underline of paired text animates too
document.querySelectorAll(".pair").forEach(pair => {
  const imageCard = pair.querySelector(".image-card");
  const textLink = pair.querySelector(".text-card .read-more");

  if (imageCard && textLink) {
    imageCard.addEventListener("mouseenter", () => {
      textLink.classList.add("hovered");
    });
    imageCard.addEventListener("mouseleave", () => {
      textLink.classList.remove("hovered");
    });
  }
});


// faq-section

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  const button = item.querySelector(".faq-question");

  button.addEventListener("click", () => {
    // Close all first
    faqItems.forEach(i => {
      if (i !== item) i.classList.remove("active");
    });

    // Toggle clicked one
    item.classList.toggle("active");
  });
});

// footer

document.querySelectorAll(".footer-col .has-submenu > span").forEach(item => {
  item.addEventListener("click", () => {
    item.parentElement.classList.toggle("open");
  });
});


