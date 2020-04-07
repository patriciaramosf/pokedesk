import React from 'react';
import Pokemon from './Pokemon'


function PokeList (props){
    
    return(
        <ul className="PokeList__container">
            {props.dataList.map((myPokemon, index)=>

                 <Pokemon   key={index}
                            pokeImage={myPokemon.url}
                            pokeName={myPokemon.name}
                            pokeTypes={myPokemon.types}
                /> 
            )}
        

           
        </ul>
    )
}

export default PokeList;