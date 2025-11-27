function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}


// Particle Background Script
const canvas = document.getElementById("particle-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 100; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(80, 120, 255, 0.25)";
    ctx.fill();

    p.x += p.dx;
    p.y += p.dy;

    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();


const canvas = document.getElementById('cursorCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

// Update canvas size on window resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Track mouse position
window.addEventListener('mousemove', e => {
  particles.push({
    x: e.clientX,
    y: e.clientY,
    alpha: 1,
    size: Math.random() * 4 + 2, // small random size
    color: `rgba(80,130,255,` // neon cyan, adjust as needed
  });
});

// Animation loop
function animateCursor() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.alpha -= 0.03; // fade out
    if (p.alpha <= 0) {
      particles.splice(index, 1); // remove invisible particles
    } else {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `${p.color}${p.alpha})`;
      ctx.shadowBlur = 10;
      ctx.shadowColor = 'rgba(80,130,255,0.7)';
      ctx.fill();
    }
  });

  requestAnimationFrame(animateCursor);
}

animateCursor();
