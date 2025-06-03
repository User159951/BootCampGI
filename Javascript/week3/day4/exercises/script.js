const h1 = document.querySelector("h1");
console.log(h1)


const paragraph1 = document.getElementById('last');
paragraph1.remove();


const h2 = document.querySelector("h2");

h2.addEventListener("click",() => {
  h2.style.backgroundColor = "red";
})


const h3 = document.querySelector("h3");

h3.addEventListener("click",() => {
  h3.style.display = "none";
})

const btn = document.getElementById("bold");

btn.addEventListener("click",() => {
  const p = document.querySelectorAll("p");

  p.forEach(para => {
    para.style.fontWeight = "bold";
  });
});


const h11 = document.querySelector("h1");

h11.addEventListener("mouseover", () => {
  const randomSize = Math.floor(Math.random() * 101); // 0 to 100
  h11.style.fontSize = `${randomSize}px`;
});

const secondPara = document.querySelectorAll("p")[1];

secondPara.addEventListener("mouseover", () => {
  secondPara.classList.add("fade-out");
});
