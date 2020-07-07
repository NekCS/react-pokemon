import React from 'react';
import Styles from './Pokemon.module.scss';

const pokemon = (props) => {


	return <div>{props.pokemon.name}</div>;
}

export default pokemon;