import React from "react";
import Card from './card';
import '../css/card.css';

function CardList({ tarjetasArray }) {


    return (
        <div className="tarjetas">
            {
                tarjetasArray.map(card => {
                  
                    return (
                        <Card cards={card} />
                    )                    
                })
            }
        </div>
    )
}

export default CardList;