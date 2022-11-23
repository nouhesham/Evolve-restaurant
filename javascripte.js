"strict";

const about = document.querySelector("#about");
console.log(about);
const info = document.querySelector(".info");
const blur = document.querySelector(".blur");
about.addEventListener("click", function () {
  info.style.display = "block";
  blur.style.display = "block";
});

// console.log(hello);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    info.style.display = "none";
    blur.style.display = "none";
  }
});
const icon = document.querySelector("#icon");
icon.addEventListener("click", function () {
  info.style.display = "none";
  blur.style.display = "none";
});
