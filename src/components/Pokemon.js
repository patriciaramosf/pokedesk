import React from 'react';

const Pokemon = (props) =>{
    return(
        <li className="Pokemon__container">
             <div className="Pokemon_name">
                <h2>{props.pokeName}</h2>
                <div className="magic"><i class="fas fa-magic"></i></div>
            </div>
            <div className="Pokemon_photo">
                <img className="photo" src={props.pokeImage} alt={props.pokeName}/>
            </div>
            <div className="Pokemon_types">
                {props.pokeTypes.map((myType, index) =>
                <div className="general">
                 <div className="circle"><i className="fas fa-fire-alt"></i></div>
                <p key={index} className="myTwoTypes">
                    {myType}
                </p>
                <p className="number">8</p>
                </div>
                )} 
            </div>

        </li>
    )
}

export default Pokemon;