const Pokedex = require('pokedex-promise-v2');
const fs = require('fs');
const path = require('path');
const formatedPokemon = require('./pokemon.json');
const pokemonArray = [];


const pokedex = new Pokedex();

const promisesArray = [];


for (pokemon in formatedPokemon) {
	pokemonArray.push(formatedPokemon[pokemon]);
}

console.log(pokemonArray.sort((prev, next) => {

	return Number(prev.id) - Number(next.id);
}));

pokemonArray.forEach(pokemon => {
	console.log(pokemon.id);
})

const json = JSON.stringify(pokemonArray)
fs.writeFile(path.join(__dirname, 'pokemonArr.json'), json, 'utf8', endProcess);
/*
pokedex.getGenerationByName("generation-i")
	.then(function (response) {
		const pokemons = response.pokemon_species;
		for (let i = 0; i < pokemons.length; i++) {
			const name = pokemons[i].name;
			if (!formatedPokemon[name]) {
				console.log(name);
				promisesArray.push(pokedex.getPokemonByName(name));
			}
		}

		Promise
			.all(promisesArray)
			.then(responses => {
				parsePokemon(responses);
			})
			.catch(error => {
				console.log(error);
			})
	})
	.catch(function (error) {
		console.log('There was an ERROR: ', error);
	});




async function parsePokemon(responses) {

	for (let pokeIndex = 0; pokeIndex < responses.length; pokeIndex++) {
		const pokemon = responses[pokeIndex];

		const pokemonObj = {
			name: pokemon.name,
			id: pokemon.id,
			stats: pokemon.stats,
			types: pokemon.types,
			weight: Number(pokemon.weight) / 10, // kg
			height: Number(pokemon.height) / 10, // m
			image: `https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`
		};

		var speciesInfo = await pokedex.getPokemonSpeciesByName(pokemon.id);
		if (
			speciesInfo &&
			speciesInfo.flavor_text_entries &&
			speciesInfo.flavor_text_entries.length) {

			// store the first english pokemon's description
			for (let descIndex = 0; descIndex < speciesInfo.flavor_text_entries.length; descIndex++) {
				if (speciesInfo.flavor_text_entries[descIndex].language.name === 'en') {
					pokemonObj.description = speciesInfo.flavor_text_entries[descIndex];
					break;
				}
			}

		}

		pokemonObj.color = speciesInfo.color.name;
		pokemonObj.habitat = speciesInfo.habitat.name;


		formatedPokemon[pokemon.name] = pokemonObj;
	}

	const tmpJson = JSON.stringify(formatedPokemon);
	console.log(tmpJson);
	console.log(formatedPokemon);
	fs.writeFile(path.join(__dirname, 'pokemon.json'), tmpJson, 'utf8', endProcess);
}
*/
function endProcess() {
	console.log('Done');
	process.exit();
} 
