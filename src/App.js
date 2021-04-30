import Logo from "./Logo";
import Bestpokemon from "./Bestpokemon";
import CaughtPokemon from "./CaughtPokemon";
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
     </div>
  );
}

export default App;