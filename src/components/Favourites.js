import React from 'react';

const Favourites = (props) => {
    return(
        <ul className="Favourites">
       {/*  {props.favourites.map((myFav, index=>
        <li key={index}>{myFav}</li>

        ))} */}  {/* me da error porque obviamente algo hago mal y no coge el valor de myFav */}

        </ul>
    )
}

export default Favourites;