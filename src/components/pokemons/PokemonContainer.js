import React from 'react';
import Pokemon from './pokemon/Pokemon';
import Styles from './PokemonContainer.module.scss';
import pokemonJson from '../../utilities/pokemonArr.json';
import axios from 'axios';

class PokemonContainer extends React.Component {

	constructor(pros) {
		super();
		this.state = {
			pokemonCollection: pokemonJson
		}
	}


	render() {

		let pokemonComponents;
		if (this.state.pokemonCollection === null) {
			pokemonComponents = null;
		} else {
			pokemonComponents = this.state.pokemonCollection.map(pokemon => {
				return <Pokemon key={pokemon.id} pokemon={pokemon} />;
			})
		}

		return (
			<div className={Styles.PokemonContainer}>
				{pokemonComponents}
			</div>
		);
	}

}

export default PokemonContainer;