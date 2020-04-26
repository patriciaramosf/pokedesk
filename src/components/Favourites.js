import React from 'react'
import Pokemon from './Pokemon'

const Favourites = (props) => {
  return (
    <>
      <h2 className="text-center">Favourites</h2>
      <ul className="Favourites">
        {props.favourites.map((fav, index) => (
          <li key={index}>
            <Pokemon {...fav} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Favourites
