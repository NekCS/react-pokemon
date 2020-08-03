import React from 'react';
import Style from './TopBar.module.scss';
import pokemonLogo from '../../../assets/images/logo/pokemon-logo.svg';
import backIcon from '../../../assets/images/back.svg';
import {
	Route,
	Link
} from 'react-router-dom';

const topBar = (props) => {

	return (
		<div className={Style.TopBar}>
			<Route path="/:id" render={() => {
				return (<Link className={Style.BackButton} to='/'><img alt="Go Back Icon" src={backIcon} /></Link>)
			}}></Route>
			<img alt="Pokemon Logo" className={Style.pokemonLogo} src={pokemonLogo} />
		</div>
	)
}

export default topBar;


// <div>Icons made by <a href="https://www.flaticon.com/authors/google" title="Google">Google</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>