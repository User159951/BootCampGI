var currentId = 1;
async function pokemon() {
  try {
    const randomId = Math.floor(Math.random() * 1010) + 1;
    currentId = randomId;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}
async function prevNextPokemon(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch Pokémon");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
}

function renderPokemon(data) {
  if (data.sprites.back_default === null) {
    document.querySelector(".error").innerText = "image not found";
    document.querySelector("#display").removeAttribute("src");
  } else {
    document
      .querySelector("#display")
      .setAttribute("src", data.sprites.back_default);
    document.querySelector(".error").innerText = "";
  }
  const details = document.querySelector(".details");
  details.innerHTML = "";
  const name = document.createElement("h1");
  name.innerText = data.species.name;
  const n = document.createElement("p");
  n.innerText = `Pokemon n ${data.id}`;
  const height = document.createElement("p");
  height.innerText = `Height : ${data.height}cm`;
  const weight = document.createElement("p");
  weight.innerText = `Weight : ${data.weight}gr`;
  const type = document.createElement("p");
  type.innerText = `Type : ${data.types[0].type.name}`;
  details.appendChild(name);
  details.appendChild(n);
  details.appendChild(height);
  details.appendChild(weight);
  details.appendChild(type);
}
document.querySelector(".green-button").addEventListener("click", async () => {
  const data = await pokemon(); 
  renderPokemon(data)
});
document.querySelector("#next").addEventListener("click",async ()=>{
  currentId++
  const data = await prevNextPokemon(currentId);
  renderPokemon(data)
})
document.querySelector("#prev").addEventListener("click",async ()=>{
  if(currentId>1) currentId--
  const data = await prevNextPokemon(currentId);
  renderPokemon(data)
})
