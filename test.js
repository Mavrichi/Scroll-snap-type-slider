import "./test2.css";
let container = document.querySelector(".container");
container.addEventListener("scroll", (ev) => {
   // console.log(container.scrollX);
   // container.scroll(1000, 0);
   // console.log({ ev });
});
let buttons = document.querySelectorAll("button");
var buttonsArray = Array.prototype.slice.call(buttons);
buttonsArray.map((e) => {
   e.addEventListener("click", (ev) => {
      let slider = document.querySelector(".container");
      let currentSlide = slider.dataset.currentslide;
      let numberOfSlides = slider.childElementCount;
      //let numberOfSlides = slider.dataset.numberofslides;
      let slideWidth = document.querySelector(".container > div").offsetWidth;
      let direction = ev.currentTarget.dataset.direction;
      if (direction == "right") {
         container.scroll({
            left: slideWidth * currentSlide + slideWidth,
            top: 0,
            behavior: "smooth",
         });
         slider.dataset.currentslide = parseInt(currentSlide) + 1;
      } else {
         container.scroll({
            left: slideWidth * currentSlide - slideWidth,
            top: 0,
            behavior: "smooth",
         });
         slider.dataset.currentslide = parseInt(currentSlide) - 1;
      }
      hideShowButtons(slider.dataset.currentslide, numberOfSlides - 1);
   });
});

let hideShowButtons = (currentSlide, numberOfSlides) => {
   let btnPrev = document.querySelector(".arrow__left");
   let btnNext = document.querySelector(".arrow__right");
   console.log(numberOfSlides);
   btnPrev.classList.toggle("hidden", currentSlide == 0);
   btnNext.classList.toggle("hidden", currentSlide == numberOfSlides);

   // if (currentSlide != 0 && currentSlide != 9) {
   //    if (btnPrev.classList.contains("hidden")) {
   //       btnPrev.classList.remove("hidden");
   //    }
   //    if (btnNext.classList.contains("hidden")) {
   //       btnNext.classList.remove("hidden");
   //    }
   // }
   // if (currentSlide == 9) {
   //    if (!btnNext.classList.contains("hidden")) {
   //       btnNext.classList.add("hidden");
   //    }
   // } else if (currentSlide == 0) {
   //    if (!btnPrev.classList.contains("hidden")) {
   //       btnPrev.classList.add("hidden");
   //    }
   // }
};
