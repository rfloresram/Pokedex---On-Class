const Bestpokemon = (props) => {

  
  return(
    <div>
    <p>My favourite Pokemon is Pikachu!</p>
     <ul>
      {props.abilities.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
    </div>

  )
}

export default Bestpokemon;

function ImportBestpokemon() {
  return (
    <div>
      <Bestpokemon />
    </div>
  );
}
