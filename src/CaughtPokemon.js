import {useState} from "react";
const CaughtPokemon = (props) => {

  var [caught, getPokemon] = useState([]);
  var PokemonTypes = ['Pidgey', 'Dito', 'Meewtwo', 'Ratata', 'Vaporeon', 'Totodile']; 

  function catchPokemon(){
    getPokemon(caught.concat(PokemonTypes[Math.floor(Math.random() * PokemonTypes.length)]));
  }

  var date = new Date().toLocaleDateString()
  return(
    <div>
    <button onClick={catchPokemon}>Pokemon counter </button>
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