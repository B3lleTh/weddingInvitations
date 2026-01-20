const eventDate = new Date("2026-08-15T18:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = eventDate - now;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  days.textContent = d;
  hours.textContent = h;
  minutes.textContent = m;
  seconds.textContent = s;
}, 1000);
