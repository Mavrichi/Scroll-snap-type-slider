import "./test2.css";
let containerGlobal = document.querySelector(".container");
// container.addEventListener("scroll", (ev) => {
//    console.log(ev);
// });
let sliderInput = document.getElementById("range");

let buttons = document.querySelectorAll("button");
var buttonsArray = Array.prototype.slice.call(buttons);

buttonsArray.map((e) => {
   e.addEventListener("click", (ev) => {
      let slider = ev.currentTarget.parentNode.querySelector(".container");
      let currentSlide = slider.dataset.currentslide;
      let numberOfSlides = slider.childElementCount;
      let slideWidth = slider.querySelector(".container > div").offsetWidth;
      let direction = ev.currentTarget.dataset.direction;
      if (direction == "right") {
         slider.scroll({
            left: slideWidth * currentSlide + slideWidth,
            top: 0,
            behavior: "smooth",
         });
         slider.dataset.currentslide = parseInt(currentSlide) + 1;
      } else {
         slider.scroll({
            left: slideWidth * currentSlide - slideWidth,
            top: 0,
            behavior: "smooth",
         });
         slider.dataset.currentslide = parseInt(currentSlide) - 1;
      }
      sliderInput.value =
         (sliderInput.max / numberOfSlides) * slider.dataset.currentslide;
      hideShowButtons(
         slider.parentNode,
         slider.dataset.currentslide,
         numberOfSlides
      );
      console.log({ currentSlide });
      console.log(slider.scrollLeft, slider.scrollTop);
   });
});

let hideShowButtons = (parentNode, currentSlide, numberOfSlides) => {
   let btnPrev = parentNode.querySelector(".arrow__left");
   let btnNext = parentNode.querySelector(".arrow__right");
   let inputNumberOfSlides = parseInt(
      document.getElementById("NumberInput").dataset.numberofslides
   );
   let newNumberOfSlides = numberOfSlides - 1;
   if (inputNumberOfSlides != 0) {
      let newNumberOfSlides = numberOfSlides - inputNumberOfSlides;
   }
   btnPrev.classList.toggle("hidden", currentSlide == 0);
   btnNext.classList.toggle("hidden", currentSlide == newNumberOfSlides);
};
document.getElementById("NumberInput").addEventListener("change", (e) => {
   let slides = document
      .getElementById("NumberInput")
      .parentNode.querySelectorAll(".slider__item");

   let slidesArray = Array.prototype.slice.call(slides);

   let numberOfSlidesShown = e.currentTarget.value;
   slidesArray.map((slide) => {
      slide.style.width = 100 / numberOfSlidesShown + "%";
      document
         .getElementById("NumberInput")
         .setAttribute("data-numberOfSlides", numberOfSlidesShown);
   });
});
sliderInput.oninput = () => {
   let outputRange = document.getElementById("output");
   outputRange.innerHTML = sliderInput.value;
   let slider = document.getElementById("test");
   let numberOfSlides = slider.childElementCount;
   let slideWidth = slider.querySelector(".container > div").offsetWidth;

   console.log(sliderInput.value);
   slider.scroll({
      left: (sliderInput.value * slideWidth - slideWidth) / 10,
      top: 0,
      behavior: "smooth",
   });
   slider.dataset.currentslide = Math.floor(
      (sliderInput.value * slideWidth - slideWidth) / 10 / slideWidth
   );
   console.log("current Slide : ", slider.dataset.currentslide);
   hideShowButtons(
      slider.parentNode,
      slider.dataset.currentslide,
      numberOfSlides
   );
};

// Set thumb width to a slide %
document.addEventListener("DOMContentLoaded", (e) => {
   let slider = document.getElementById("test");
   let numberOfSlides = slider.childElementCount;
   let slideWidth = slider.querySelector(".container > div").offsetWidth;
   let rangeTotalWidth = sliderInput.offsetWidth;
   let thumbWidth = rangeTotalWidth / (numberOfSlides - 1) + "px";
   document
      .querySelector(":root")
      .style.setProperty("--rangeWidth", thumbWidth);
   console.log("am facut width-ul : ", thumbWidth);
});
