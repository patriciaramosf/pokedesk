import React from 'react';

const Pokemon = (props) =>{
    return(
        <li className="Pokemon__container">
             <div className="Pokemon_name">
                <h2>{props.pokeName}</h2>
            </div>
            <div className="Pokemon_photo">
                <img className="photo" src={props.pokeImage} alt={props.pokeName}/>
            </div>
            <div className="Pokemon_types">
                <div className="type1">
                <div className="circle"><i className="fas fa-fire-alt"></i></div>
                {props.pokeTypes.map((myType, index) =>
                <p key={index} className="myTwoTypes">
                    {myType}
                </p>
                )}
                <p className="number">30</p>
                </div>
                <div className="type2">
                <div className="circle"><i className="fas fa-fire-alt"></i></div>
                {props.pokeTypes.map((myType, index) =>
                <p key={index} className="myTwoTypes">
                    {myType}
                </p>
                )}
                <p className="number">60</p>
                </div>
            </div>

        </li>
    )
}

export default Pokemon;