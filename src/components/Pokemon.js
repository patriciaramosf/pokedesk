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
                 <div className="circle"><i className={`fas ${myType=== "fire" ? "fa-fire-alt" : myType=== "water" ? "fa-tint" : myType === "grass" ? "fa-leaf" : "fa-bug"}`}></i>
                 </div>
                <p key={index} className="myTwoTypes">
                    {myType}
                </p>
                <p className="number">8</p>
                </div>
                )} 
            </div>
            {/*
            flying <i class="fas fa-dove"></i>
            poison <i class="fas fa-skull-crossbones"></i>
             */}
        </li>
    )
}

export default Pokemon;