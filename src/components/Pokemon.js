import React from 'react';
import logo from '../pokeball.png';
const Pokemon = (props) =>{
    const numberSum = Math.round(Math.random()*60);
    const getFav=(event)=>props.getFav(<Pokemon/>)
    /* const getFav=(event)>props.getFavr(event.currentTarget.parentElement) */
    return(
        <div className="Pokemon__container">
            <button onClick={getFav}className="getFavourite">
                GET IT
            </button>
             <div className="Pokemon_name">
                <h2>{props.pokeName}</h2>
                <div className="magic">
                    <img alt="pokemonImg" className="pokeball" src={logo}/>
                </div>
            </div>
            <div className="Pokemon_photo">
                <img className="photo" src={props.pokeImage} alt={props.pokeName}/>
            </div>
            <div className="Pokemon_types">
                {props.pokeTypes.map((myType,index) =>
                    <div key={index} className="general">
                        <div className="circle">
                            <i className={`fas ${myType=== "fire" ? "fa-fire-alt" : myType=== "water" ? "fa-tint" : myType === "grass" ? "fa-leaf" : myType==="bug" ? "fa-bug" : myType==="flying" ? "fa-dove" : "fa-skull-crossbones"}`}
                            />
                        </div>
                        <ul className="myTwoTypes">
                            <li key={index}>{myType}</li>
                        </ul>
                        <p className="number">{numberSum}</p>
                    </div>
                )} 
            </div>
        </div>
    )
}

export default Pokemon;