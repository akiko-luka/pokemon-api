console.log("working!");

const form = document.getElementById("search-form");
const container = document.querySelector(".container");

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

async function handleSubmit(event) {
  event.preventDefault();
  const pokemonName = event.target.elements["pokemon-name"].value;

  const response = await fetch(apiURL + pokemonName);
  const data = await response.json();

  console.log(data);

  const card = `
  <div class="card">
  <article>
    <h1 class="poke-name">${data.name}</h1>
    </article>
    <img src="${data.sprites.front_default}">
    
    <h3>Stats</h3>
    <ul class="stat">
      ${data.stats
        .map(
          (stat) => `<div class="stat-list">
        <li class="stat-name">${stat.stat.name}:</li>
        <p class="base-stat">${stat.base_stat}</p></div>`)
        .join("")}
    </ul>

    <h3>Abilities</h3>
    <ul class="ability">
      ${data.abilities
        .map((ability) => `<li>${ability.ability.name}</li>`)
        .join("")}
    </ul>
  </div>`;

  container.innerHTML = card;

  event.target.elements["pokemon-name"].value = "";
}

form.addEventListener("submit", handleSubmit);
