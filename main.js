document.getElementById("rsvpForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const attendance = document.getElementById("attendance").value;

  const phone = "3113948748"; // NÚMERO DEL CLIENTE
  const message = `Hola, soy ${name}. ${attendance} a la boda.`;

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
});
