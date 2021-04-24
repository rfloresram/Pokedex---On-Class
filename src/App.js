import Logo from "./Logo";
import Bestpokemon from "./Bestpokemon";
import CaughtPokemon from "./CaughtPokemon";
import './App.css';


function App() {
  return (
    <div>
     <Logo appName = "Pokedex"/>
     <Bestpokemon abilities = {['Anticipation', 'Adaptability', 'Run-Away']}/>
     <CaughtPokemon date = {new Date().toLocaleDateString()} />
     </div>
  );
}

export default App;