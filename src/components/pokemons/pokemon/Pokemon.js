import React from 'react';
import Styles from './Pokemon.module.scss';
import { Link } from "react-router-dom";
import PokemonButtonSVG from './PokemonButtonSVG';

const pokemon = (props) => {

	const imageStyle = {
		backgroundImage: 'url(' + props.pokemon.image + ')',
	}

	return (
		<div className={Styles.PokemonCard}>
			<div className={Styles.PokemonImage} style={imageStyle}></div>
			<div className={Styles.PokemonName}>{props.pokemon.name}</div>
			<div className={Styles.PokemonFooter}>
				<Link
					to={
						{
							pathname: `/${props.pokemon.name}`,
							state: { pokemon: props.pokemon }
						}
					}
					className={Styles.PokemonButton}
				>
					<PokemonButtonSVG />
				</Link>
			</div>
		</div>
	);
}

export default pokemon;