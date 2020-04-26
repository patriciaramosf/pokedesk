import React from 'react'
import Pokemon from './Pokemon'

const PokeList = (props) => {
  return (
    <ul className="PokeList__container">
      {props.dataList.map((myPokemon) => (
        <li key={myPokemon.id}>
          <Pokemon {...myPokemon} getFav={props.getFav} />
        </li>
      ))}
    </ul>
  )
}

export default PokeList
