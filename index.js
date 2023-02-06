"use strict";

const db = [
  "https://media.bom.gov.au/social/upload/images/iStock-blue-sea-resize.jpg",
  "https://as1.ftcdn.net/v2/jpg/01/21/06/48/1000_F_121064813_5CONOqmYSLyCLJlkRn3FsUl8733cg2qc.jpg",
  "https://image.ceneostatic.pl/data/products/73512074/25742bb1-44fb-4aa5-ac1c-1e78bc08595e_i-sea-of-thieves-digital.jpg",
];

const slider = new Slider(db);

const image = document.querySelector(".slide>img");
function updateView() {
  // image.src = db[slider.currentIndex];
  image.src = slider.currentSlide;
}
updateView();

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);

prevBtn.addEventListener("click",()=>{
  slider.currentIndex = slider.prev();
  updateView();
});
nextBtn.addEventListener("click",()=>{
  slider.currentIndex = slider.next();
  updateView();
});
