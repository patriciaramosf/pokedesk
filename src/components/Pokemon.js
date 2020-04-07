import React from 'react';

function Pokemon (props){
    return(
        <li className="Pokemon__container">
            <div className="Pokemon_photo">
                <img className="photo" src={props.pokeImage}/>
            </div>
            <div className="Pokemon_name">
                <h2>{props.pokeName}</h2>
            </div>
            <div className="Pokemon_types">
                {props.pokeTypes.map((myType, index) =>
                <p key={index}>
                    {myType}

                </p>
                )}
                    
            </div>

        </li>
    )
}

export default Pokemon;