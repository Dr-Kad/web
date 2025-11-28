/* ----------------------------------------------------
   MOBILE NAV MENU (Hamburger)
----------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger) {
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }
});


/* ----------------------------------------------------
   PARTICLE BACKGROUND (BACK CANVAS)
----------------------------------------------------- */
const bgCanvas = document.getElementById("particle-bg");
const bgCtx = bgCanvas.getContext("2d");

bgCanvas.width = window.innerWidth;
bgCanvas.height = window.innerHeight;

let bgParticles = [];

for (let i = 0; i < 100; i++) {
  bgParticles.push({
    x: Math.random() * bgCanvas.width,
    y: Math.random() * bgCanvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateParticles() {
  bgCtx.clearRect(0, 0, bgCanvas.width, bgCanvas.height);

  bgParticles.forEach(p => {
    bgCtx.beginPath();
    bgCtx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    bgCtx.fillStyle = "rgba(80, 120, 255, 0.25)";
    bgCtx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > bgCanvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > bgCanvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


/* ----------------------------------------------------
   CURSOR NEON TRAIL (TOP CANVAS)
----------------------------------------------------- */
const cursorCanvas = document.getElementById("cursorCanvas");
const cCtx = cursorCanvas.getContext("2d");

cursorCanvas.width = window.innerWidth;
cursorCanvas.height = window.innerHeight;

let cursorParticles = [];

// Update size on resize
window.addEventListener("resize", () => {
  cursorCanvas.width = window.innerWidth;
  cursorCanvas.height = window.innerHeight;
});

// Add particle on cursor move
window.addEventListener("mousemove", (e) => {
  cursorParticles.push({
    x: e.clientX,
    y: e.clientY,
    alpha: 1,
    size: Math.random() * 4 + 2,
    dx: (Math.random() - 0.5) * 1.5,
    dy: (Math.random() - 0.5) * 1.5
  });
});

function animateCursor() {
  cCtx.clearRect(0, 0, cursorCanvas.width, cursorCanvas.height);

  cursorParticles.forEach((p, i) => {
    p.alpha -= 0.03;
    p.x += p.dx;
    p.y += p.dy;

    if (p.alpha <= 0) {
      cursorParticles.splice(i, 1);
    } else {
      cCtx.beginPath();
      cCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      cCtx.fillStyle = `rgba(80,130,255,${p.alpha})`;
      cCtx.shadowBlur = 12;
      cCtx.shadowColor = "rgba(80,130,255,0.8)";
      cCtx.fill();
    }
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();
