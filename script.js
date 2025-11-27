function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("open");
}


// Particle Background Script
const canvas = document.getElementById("particle-bg");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 50; i++) {
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



const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let fireworks = [];

class Firework {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.particles = [];
    this.color = color;
    for (let i = 0; i < 20; i++) {
      this.particles.push({
        x: this.x,
        y: this.y,
        dx: (Math.random() - 0.5) * 5,
        dy: (Math.random() - 0.5) * 5,
        alpha: 1
      });
    }
  }
  update() {
    this.particles.forEach(p => {
      p.x += p.dx;
      p.y += p.dy;
      p.alpha -= 0.02;
    });
    this.particles = this.particles.filter(p => p.alpha > 0);
  }
  draw() {
    this.particles.forEach(p => {
      ctx.fillStyle = `rgba(${this.color},${p.alpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
      ctx.fill();
    });
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fireworks.forEach(f => {
    f.update();
    f.draw();
  });
  fireworks = fireworks.filter(f => f.particles.length > 0);
  requestAnimationFrame(animate);
}

animate();

document.getElementById('likeBtn').addEventListener('click', () => {
  const colors = [
    "80,130,255", // blue
    "180, 80, 255", // violet
    "120, 255, 255" // cyan
  ];
  for (let i = 0; i < 5; i++) {
    fireworks.push(new Firework(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      colors[Math.floor(Math.random() * colors.length)]
    ));
  }
});
