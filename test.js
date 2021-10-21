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

      let slideWidth = document.querySelector(".container > div").offsetWidth;
      let direction = ev.currentTarget.dataset.direction;
      console.log({ direction }, { currentSlide }, { slider });
      console.log({ slideWidth });
      if (direction == "right") {
         console.log(slideWidth * currentSlide + slideWidth);
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
      if (slider.dataset.currentslide != 0) {
         if (
            document.querySelector(".arrow__left").classList.contains("hidden")
         ) {
            document.querySelector(".arrow__left").classList.remove("hidden");
         }
      }
   });
});
