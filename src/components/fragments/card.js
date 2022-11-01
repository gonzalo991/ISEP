import React from "react";

function Card({cards}) {

    const { _id, titulo, texto } = cards;

    return (

        <div className="card" key={_id} >
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{texto}</p>
            </div>
        </div >

    )
}

export default Card;