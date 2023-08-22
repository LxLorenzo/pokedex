const url = "https://pokeapi.co/api/v2/pokemon/";

const getPokemon = () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const pokemon = data.results;
      pokemon.map((poke) => {
        const pokemonContainer = document.querySelector(".pokemons");
        const pokeCard = document.createElement("li");
        const pokemonId = poke.url.split("/")[6];
        pokeCard.classList.add("pokemon");
        pokeCard.innerHTML = `
        <span class="number">
          #${pokemonId}
        </span>
        <span class="name">
          ${poke.name}
        </span>
        <div class="detail">
          <ol class="types">
            <li class="type">Grass</li>
            <li class="type">Poison</li>
          </ol>
          <img
            class="image"
            src=${`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`}
            alt="Bulbasaur"
          />
        </div>
        `;
        pokemonContainer.appendChild(pokeCard);
      });
    })
    .catch((error) => console.log(error));
};

getPokemon();
