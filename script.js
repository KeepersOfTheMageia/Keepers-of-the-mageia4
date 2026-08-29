const overlay = document.getElementById("image-overlay");
const LargeImage = document.getElementById("large-image");
const cardImages = document.querySelectorAll(".card img");
const closeButton = document.getElementById("close-button");

cardImages.forEach(function(image) {
  image.addEventListener("click", function() {
    LargeImage.src = image.src;
    overlay.style.display = "flex";
  });
});
LargeImage.addEventListener("click", function(event) {
  event.stopPropagation();
});
              
overlay.addEventListener("click", function() {
  overlay.style.display = "none";
});
closeButton.addEventListener("click", function() {
  overlay.style.display = "none";
});
