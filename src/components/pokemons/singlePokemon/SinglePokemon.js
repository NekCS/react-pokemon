import React from 'react';
import Styles from './SinglePokemon.module.scss';

const singlePokemon = (props) => {
	//console.log(props);
	//let { id } = useParams();
	const pokemon = props.location.state.pokemon;

	const imageStyle = {
		backgroundImage: 'url(' + pokemon.image + ')',
	}

	return (
		<div className={Styles.SinglePokemon}>
			<div className={Styles.PokemonImage} style={imageStyle}></div>
			<div className={Styles.PokemonName}>{pokemon.name}</div>
		</div>
	);
}

export default singlePokemon;