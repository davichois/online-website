const images = document.querySelectorAll(".img");
const containerImage = document.querySelector(".container-img");
const imageContainer = document.querySelector(".img-show");
const close = document.querySelector(".bx.bx-x");
const copy = document.querySelector(".copy");

images.forEach((image) => {
  image.addEventListener("click", () => {
    addImage(image.getAttribute("src"), image.getAttribute("alt"));
  });
});

const addImage = (src, alt) => {
  containerImage.classList.toggle("move");
  imageContainer.src = src;
  imageContainer.alt = alt;
  copy.innerHTML = alt;
};

imageContainer.addEventListener("click",()=>{
  imageContainer.classList.toggle("img-show-zoom")
})

close.addEventListener("click", () => {
  containerImage.classList.toggle("move");
});


