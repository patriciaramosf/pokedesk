import React from 'react'
import logo from '../pokeball.png'
const Pokemon = ({ getFav, ...pokemon }) => {
  const numberSum = Math.round(Math.random() * 60)
  return (
    <div className="Pokemon__container">
      {getFav && (
        <button onClick={() => getFav(pokemon)} className="getFavourite">
          GET IT
        </button>
      )}
      <div className="Pokemon_name">
        <h2>{pokemon.name}</h2>
        <div className="magic">
          <img alt="pokemonImg" className="pokeball" src={logo} />
        </div>
      </div>
      <div className="Pokemon_photo">
        <img className="photo" src={pokemon.url} alt={pokemon.name} />
      </div>
      <div className="Pokemon_types">
        {pokemon.types.map((myType, index) => (
          <div key={index} className="general">
            <div className="circle">
              <i
                className={`fas ${
                  myType === 'fire'
                    ? 'fa-fire-alt'
                    : myType === 'water'
                    ? 'fa-tint'
                    : myType === 'grass'
                    ? 'fa-leaf'
                    : myType === 'bug'
                    ? 'fa-bug'
                    : myType === 'flying'
                    ? 'fa-dove'
                    : 'fa-skull-crossbones'
                }`}
              />
            </div>
            <ul className="myTwoTypes">
              <li key={index}>{myType}</li>
            </ul>
            <p className="number">{numberSum}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokemon
