async function GetFighterPokemon(){

    
    const response = await fetch("https://pokeapi.co/api/v2/type/fighting");
    
    const data = await response.json();
    const pokemonArray = data.pokemon;
    
    const randomPokemonURL = pokemonArray[getRandomInt(pokemonArray.length)].pokemon.url

    const response2 = await fetch(randomPokemonURL);
    const data2 = await response2.json();

    const pokemonImage = data2.sprites.front_default;
    let htmlImage = document.getElementById("pokemonImage");
    htmlImage.src = pokemonImage;
    htmlImage.style.display = "block";
    htmlImage.style.width = "250px"
    htmlImage.style.height = "250px"
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }