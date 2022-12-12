import React from "react";
import Slider from "../fragments/slider";
import CardList from "../fragments/cardList";
import { useState, useEffect } from 'react';
import SobreNos from "../fragments/sobrenos";
import Institucional from "../fragments/institucional";

function Home() {

    //Utilizo un estado para setear el contenido de las tarjetas
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

            <SobreNos />

            <Institucional />

        </>

    )
}

export default Home;