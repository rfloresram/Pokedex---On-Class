import Logo from "./Logo";
import Bestpokemon from "./Bestpokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";
import './App.css';

function App() {

  function logWhenClicked() {
    console.log("Gotta catch'em all!");
  }
  
  return (
    <div>
     <Logo onClick= {logWhenClicked} appName = "Pokedex"/>
     <Bestpokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>

     <CaughtPokemon date = {new Date().toLocaleDateString()} />
     <PokemonMovesSelector />
     <PokemonCity />
     </div>
  );
}

export default App;