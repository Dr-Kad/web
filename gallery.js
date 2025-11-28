const track = document.getElementById("galleryTrack");

// Duplicate the images for seamless loop
track.innerHTML += track.innerHTML;

let speed = 0.5; // pixels per frame
let pos = 0;

function animateGallery() {
  pos -= speed;
  if (pos <= -track.scrollWidth / 2) {
    pos = 0; // reset to start seamlessly
  }
  track.style.transform = `translateX(${pos}px)`;
  requestAnimationFrame(animateGallery);
}

animateGallery();
