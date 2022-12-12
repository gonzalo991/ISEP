import React from "react";
import '../css/card.css';

function Card({cards}) {


    return (

        <div className="card" key={cards._id} >
            <div className="card-body">
                <h5 className="card-title">{cards.titulo}</h5>
                <p className="card-text">{cards.texto}</p>
            </div>
        </div >

    )
}

export default Card;