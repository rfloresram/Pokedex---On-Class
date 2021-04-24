const CaughtPokemon = (props) => {

  var date = new Date().toLocaleDateString()
  return(
    <p>Caught 0 Pokemon on {props.date}</p>
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