
window.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("MyForm");
  const radiusInput = document.getElementById("radius");
  const volumeInput = document.getElementById("volume");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    const radius = parseFloat(radiusInput.value);

    if (isNaN(radius) || radius <= 0) {
      alert("Please enter a valid positive number for the radius.");
      return;
    }

    // Volume of a sphere formula: (4/3) * π * r^3
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Set volume field (rounded to 2 decimals)
    volumeInput.value = volume.toFixed(2);
  });
});
