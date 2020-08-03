import React from 'react';
import Pokemon from './pokemon/Pokemon';
import Styles from './PokemonContainer.module.scss';

class PokemonContainer extends React.Component {

	constructor(props) {
		super();
		this.state = {
			pokemonCollection: props.pokemons
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