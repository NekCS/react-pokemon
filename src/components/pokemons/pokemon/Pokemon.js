import React from 'react';
import Styles from './Pokemon.module.scss';

const pokemon = (props) => {


	return (

		<div className={Styles.PokemonCard}>
			{props.pokemon.id} - {props.pokemon.name}
			<p>
				<img alt={props.pokemon.name} src={props.pokemon.image} />
			</p>
		</div>
	);
}

export default pokemon;