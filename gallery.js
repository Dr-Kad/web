const track = document.getElementById("galleryTrack");
let scrollAmount = 0;

// Pause auto scroll on hover
track.addEventListener("mouseenter", () => {
  track.style.animationPlayState = "paused";
});
track.addEventListener("mouseleave", () => {
  track.style.animationPlayState = "running";
});

// Manual scroll movement
function scrollGallery(direction) {
  scrollAmount += direction * 250; // scroll 250px per click

  track.style.transition = "transform 0.4s ease";
  track.style.transform = `translateX(${scrollAmount}px)`;
}

// Arrow buttons
document.querySelector(".left-arrow").onclick = () => scrollGallery(1);
document.querySelector(".right-arrow").onclick = () => scrollGallery(-1);
