import {useState} from "react";
const CaughtPokemon = (props) => {

  var [caught, getPokemon] = useState([]);
  var PokemonTypes = ['Pidgey', 'Dito', 'Meewtwo', 'Ratata', 'Vaporeon', 'Totodile']; 

  function catchPokemon(){
    getPokemon(caught.concat(PokemonTypes[Math.floor(Math.random() * PokemonTypes.length)]));
  }

  var [pokemonNameInput, setpokemonNameInput] = useState("");
  
  function handleInputChange(event){
    setpokemonNameInput(event.target.value);
  }

  function onClick(){
    if (pokemonNameInput !== "") {
      getPokemon(caught.concat(pokemonNameInput));
      setpokemonNameInput("");
    }   
  }

  return(
    <div>
      <input 
      type="text"
      value={pokemonNameInput}
      onChange= {handleInputChange}
      />
    <button onClick={onClick}>Pokemon counter </button>
       <p>
          <ul>
          {caught.map((item, index) => {
            return <li key={index}>{item}</li>
          })} Pokemon on {props.date}
         </ul>
       </p>
    </div>
  )
}

export default CaughtPokemon;


function ImportCaughtPokemon() {
  return (
    <div>
      <CaughtPokemon />
    </div>
  );
}