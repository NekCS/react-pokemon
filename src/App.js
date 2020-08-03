import React from 'react';
import './App.css';
import TopBar from './components/layout/TopBar/TopBar';
import PokemonContainer from './components/pokemons/PokemonContainer';
import SinglePokemon from './components/pokemons/singlePokemon/SinglePokemon';
import pokemonJson from './utilities/pokemonArr.json';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route exact path="/">
            <PokemonContainer pokemons={pokemonJson} />
          </Route>
          <Route path="/:id" component={SinglePokemon}>

          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
