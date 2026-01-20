/* ================= CONTADOR ================= */
const eventDate = new Date("2026-08-15T18:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = eventDate - now;

  days.textContent = Math.floor(diff / 86400000);
  hours.textContent = Math.floor((diff / 3600000) % 24);
  minutes.textContent = Math.floor((diff / 60000) % 60);
  seconds.textContent = Math.floor((diff / 1000) % 60);
}, 1000);

/* ================= PARALLAX CONTROLADO ================= */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  document.querySelectorAll(".parallax").forEach(el => {
    const speed = parseFloat(el.dataset.speed || 0.2);
    const offset = Math.min(scrollY * speed, 140);
    el.style.transform = `translateY(${offset}px)`;
  });

  document.querySelectorAll(".image-parallax").forEach(el => {
    const offset = Math.min(scrollY * 0.15, 120);
    el.style.transform = `translateY(${offset}px)`;
  });
});
