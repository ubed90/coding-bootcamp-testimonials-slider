const prevBtn = document.querySelector(".prev");

const nextBtn = document.querySelector(".next");

const testimonialOne = document.querySelector(".testimonial__one");
const testimonialTwo = document.querySelector(".testimonial__two");

nextBtn.addEventListener("click", function () {
  testimonialOne.classList.add("hidden");
  testimonialTwo.classList.remove("hidden");
});

prevBtn.addEventListener("click", function () {
  testimonialOne.classList.remove("hidden");
  testimonialTwo.classList.add("hidden");
});
