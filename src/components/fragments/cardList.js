import React from "react";
import Card from './card';
import '../css/card.css';

function CardList({ tarjetasArray }) {


    return (
        <div className="tarjetas">
            {
                tarjetasArray.map(card => {

                    const { _id, titulo, texto } = card;

                    return (
                        <Card cards={card} />
                    )
                })
            }
        </div>
    )
}

export default CardList;