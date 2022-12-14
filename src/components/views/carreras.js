import React, { useState, useEffect } from "react";
import InfoCarreras from "../fragments/infoCarreras";
import '../css/carreras.css';

function Carreras() {

    const [carrera, setCarrera] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/carreras");
            const carrera = await response.json();
            setCarrera(carrera);
        })()
    }, [])

    return (
        <>
            <div className="carreras-container">
                <h1 className="carreras-titulo">Carreras</h1>
                <InfoCarreras props={carrera} />
            </div>
        </>
    )
}

export default Carreras;