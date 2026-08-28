const overlay = document.getElementById("image-overlay");
const LargeImage = document.getElementById("large-image");
const cardImages = document.querySelectorAll(".card img");

cardImages.forEach(function(image) {
  image.addEventListener("click", function() {
    largeImage.src = image.src;
    overlay.style.display = "flex";
  });
});
