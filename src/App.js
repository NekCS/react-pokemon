import React from 'react';
import './App.css';
import TopBar from './components/layout/TopBar/TopBar';
import PokemonContainer from './components/pokemons/PokemonContainer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <PokemonContainer />
    </div>
  );
}

export default App;
