const Logo = (props) => {

//   var appName = "Rafael Flores's Pokedex"

  return (
      <header>
      <h1>Welcome to {props.appName}</h1>
      <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"/>
      </header>  
  );
}

export default Logo;

//Importing components//

function ImportLogo() {
  return (
    <div>
      <Logo />
    </div>
  );
}
