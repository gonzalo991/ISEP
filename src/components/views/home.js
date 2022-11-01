import React from "react";
import Slider from "../fragments/slider";
import CardList from "../fragments/cardList";
import { useState, useEffect } from 'react';

function Home() {

    const [tarjetas, setTarjetas] = useState(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/tarjetas");
            const tarjetas = await response.json();
            setTarjetas(tarjetas);
        })()
    }, []);

    return (
        <>
            <Slider />
            {
                tarjetas ?
                    <CardList tarjetasArray={tarjetas} />
                    :
                    <h2>Cargando...</h2>
            }
        </>

    )
}

export default Home;