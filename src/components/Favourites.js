import React from 'react'
import Pokemon from './Pokemon'

const Favourites = (props) => {
  return (
    <>
    <div className="favContainer">
      <ul className="Favourites">
        {props.favourites.map((fav, index) => (
          <li className="liFav" key={index}>
            <Pokemon {...fav} />
          </li>
        ))}
      </ul>
      </div>
    </>
  )
}

export default Favourites
