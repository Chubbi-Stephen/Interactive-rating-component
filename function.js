const ratings = document.querySelectorAll(".rating__unit");
const button = document.querySelector("button.btn");
const ratingState = document.getElementById("rating__state");
const thanksState = document.getElementById("thanks__state");
const selectedRatingSpan = document.getElementById("selected__rating");

ratings.forEach((rating) => {
  rating.addEventListener("click", () => {
    rating.classList.add("orange");
    selectedRatingSpan.innerText = rating.innerText;
  });
});

button.addEventListener("click", () => {
  ratingState.classList.add("hide");
  button.classList.add("hide");
  thanksState.classList.add("show");
});
