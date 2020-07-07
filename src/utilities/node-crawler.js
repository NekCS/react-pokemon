const Pokedex = require('pokedex-promise-v2');
const fs = require('fs');
const path = require('path');
const request = require('request');
const pokedex = new Pokedex();

const formatedPokemon = [];
const promisesArray = [];


for (let i = 1; i < 5; i++) {
	//promisesArray.push(pokedex.getPokemonByName(i));
}




Promise
	.all(promisesArray)
	.then(responses => {
		parsePokemon(responses);
	})

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


		formatedPokemon.push(pokemonObj);
	}

	const tmpJson = JSON.stringify(formatedPokemon);
	fs.writeFile(path.join(__dirname, 'pokemon.json'), tmpJson, 'utf8', endProcess);
}

function endProcess() {
	console.log('Done');
	process.exit();
}
