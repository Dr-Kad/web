window.onload = () => {

  const track = document.getElementById("galleryTrack");
  if (!track) {
    console.error("Gallery track not found.");
    return;
  }

  // Duplicate images for seamless loop
  track.innerHTML += track.innerHTML;

  let pos = 0;
  const speed = 0.6; // pixels per frame

  function scrollGallery() {
    pos -= speed;

    const resetPoint = track.scrollWidth / 2;
    if (Math.abs(pos) >= resetPoint) {
      pos = 0;
    }

    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(scrollGallery);
  }

  scrollGallery();
};
