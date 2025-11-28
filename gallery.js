const track = document.getElementById("galleryTrack");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

const scrollAmount = track.children[0].offsetWidth + 20; // image width + gap

leftArrow.addEventListener("click", () => {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
});

rightArrow.addEventListener("click", () => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
});

// Optional: auto-scroll
let autoScroll = setInterval(() => {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
}, 3000);

// Pause auto-scroll on hover
track.addEventListener("mouseenter", () => clearInterval(autoScroll));
track.addEventListener("mouseleave", () => {
    autoScroll = setInterval(() => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }, 3000);
});
