import React from 'react';
import Style from './TopBar.module.scss';
import pokemonLogo from '../../../assets/images/logo/pokemon-logo.svg';

const topBar = (props) => {

	return (
		<div className={Style.TopBar}>
			<img alt="Pokemon Logo" className={Style.pokemonLogo} src={pokemonLogo} />
		</div>
	)
}


export default topBar;