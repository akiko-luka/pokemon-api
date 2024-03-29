console.log("working!");

const form = document.getElementById("search-form");
const container = document.querySelector(".container");

const apiURL = `https://pokeapi.co/api/v2/pokemon/`;

async function handleSubmit(event) {
  event.preventDefault();
	const pokemonName = event.target.elements["pokemon-name"].value;

	const response = await fetch(apiURL + pokemonName)
	const data = await response.json()

	console.log(data);
	

  const card = `
  <div class="card">
    <h2>${data.name}</h2>
    <img src="${data.sprites.front_default}">
    <h3>Stats</h3>
    <ul class="stat">
      ${data.stats
        .map((stat) => `<li><span class="stat-name">${stat.stat.name}:</span> <span class="base-stat">${stat.base_stat}</span></li>`)
        .join("")}
    </ul>
    <h3>Abilities</h3>
    <ul class="ability">
      ${data.abilities.map((ability) => `<li>${ability.ability.name}</li>`).join("")}
    </ul>
  </div>`;
container.innerHTML = card;
	

  event.target.elements["pokemon-name"].value = '';
}

form.addEventListener("submit", handleSubmit);
