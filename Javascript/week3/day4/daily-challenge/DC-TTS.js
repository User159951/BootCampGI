document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("libform");
  const storySpan = document.getElementById("story");
  const libButton = document.getElementById("lib-button");

  // Create and insert shuffle button
  const shuffleBtn = document.createElement("button");
  shuffleBtn.textContent = "Shuffle Story";
  shuffleBtn.type = "button";
  form.appendChild(shuffleBtn);

  let currentInputs = {};

  const storyTemplates = [
    ({ noun, adjective, person, verb, place }) =>
      `${person} was walking through the ${place} when they saw a ${adjective} ${noun} trying to ${verb}.`,
    ({ noun, adjective, person, verb, place }) =>
      `In ${place}, ${person} decided to ${verb} with a ${adjective} ${noun}. What a day!`,
    ({ noun, adjective, person, verb, place }) =>
      `Why did ${person} bring a ${adjective} ${noun} to ${place}? To ${verb}, of course!`
  ];

  function getInputs() {
    const noun = document.getElementById("noun").value.trim();
    const adjective = document.getElementById("adjective").value.trim();
    const person = document.getElementById("person").value.trim();
    const verb = document.getElementById("verb").value.trim();
    const place = document.getElementById("place").value.trim();

    if (!noun || !adjective || !person || !verb || !place) {
      alert("Please fill in all fields!");
      return null;
    }

    return { noun, adjective, person, verb, place };
  }

  function displayStory(inputs) {
    const randomTemplate =
      storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
    storySpan.textContent = randomTemplate(inputs);
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = getInputs();
    if (!inputs) return;

    currentInputs = inputs;
    displayStory(currentInputs);
  });

  shuffleBtn.addEventListener("click", () => {
    if (Object.keys(currentInputs).length === 0) {
      alert("Please generate a story first by filling the form.");
      return;
    }
    displayStory(currentInputs);
  });
});
