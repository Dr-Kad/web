const track = document.querySelector(".slider-track");
const prevBtn = document.querySelector(".slider-btn.prev");
const nextBtn = document.querySelector(".slider-btn.next");

let autoScrollActive = true;
let autoScrollTimer;

// Pause auto-scroll
function pauseAutoScroll() {
    autoScrollActive = false;
    track.style.animationPlayState = "paused";

    clearTimeout(autoScrollTimer);
    autoScrollTimer = setTimeout(() => {
        autoScrollActive = true;
        track.style.animationPlayState = "running";
    }, 4000); // resume after 4 seconds
}

// Manual scroll function
function manualScroll(direction) {
    pauseAutoScroll();

    const scrollAmount = track.children[0].offsetWidth + 20; // image width + gap
    track.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth"
    });
}

// Button handlers
nextBtn.addEventListener("click", () => manualScroll("next"));
prevBtn.addEventListener("click", () => manualScroll("prev"));
