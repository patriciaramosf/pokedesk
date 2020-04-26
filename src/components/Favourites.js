import React from 'react';

const Favourites = (props) => {
    return(
        <ul className="Favourites">
        {props.favourites.map((fav, index=>
        <li key={index}>{fav}</li>

        ))}

        </ul>
    )
}

export default Favourites;