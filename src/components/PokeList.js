import React from 'react';
import Pokemon from './Pokemon'


const PokeList = (props) => {
    
    return(
        <ul className="PokeList__container">
            {props.dataList.map((myPokemon)=>
                <li key={myPokemon.id}>
                    <Pokemon   pokeImage={myPokemon.url}
                                pokeName={myPokemon.name}
                                pokeTypes={myPokemon.types}
                                key={myPokemon.id}
                    /> 
                </li>
            )}
        

           
        </ul>
    )
}

export default PokeList;