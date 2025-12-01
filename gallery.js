function enableAutoScroll(trackId, speed = 0.6) {
  const track = document.getElementById(trackId);
  if (!track) return;

  track.innerHTML += track.innerHTML; // duplicate all items (images + captions)

  let pos = 0;

  function scroll() {
    pos -= speed;
    const reset = track.scrollWidth / 2;

    if (Math.abs(pos) >= reset) pos = 0;

    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(scroll);
  }

  scroll();
}

window.onload = () => {
  enableAutoScroll("labsTrack", 0.6);
  enableAutoScroll("confTrack", 0.5);
  enableAutoScroll("awardTrack", 0.7);
  enableAutoScroll("galleryTrack", 0.6);
};
