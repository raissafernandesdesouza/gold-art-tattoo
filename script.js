const bookingForm = document.querySelector("#booking-form");
const yearLabel = document.querySelector("#current-year");

yearLabel.textContent = new Date().getFullYear();

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(bookingForm);
  const fields = [
    `Olá! Meu nome é ${formData.get("name")}.`,
    `Quero conversar sobre uma tattoo: ${formData.get("idea")}.`,
  ];
  const location = formData.get("location");
  const date = formData.get("date");

  if (location) fields.push(`Local do corpo: ${location}.`);
  if (date)
    fields.push(
      `Data desejada: ${new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR")}.`,
    );

  const message = encodeURIComponent(fields.join("\n"));
  window.open(
    `https://wa.me/5535991582489?text=${message}`,
    "_blank",
    "noopener,noreferrer",
  );
});
