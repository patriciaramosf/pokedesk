import React from 'react';
import logo from '../pokemon.png';
const Header = () => {
    return(
        <header className="Header">
           <h1 className="title">- Pokedesk</h1>
           <div className="containerPokemonLogo">
                <img className="pokemonLogo" src={logo} alt="pokemon logo"/>
            </div>
        </header>
    )
}

export default Header;