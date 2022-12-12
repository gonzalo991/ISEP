import React, { useEffect, useState } from "react";
import '../css/inscripciones.css';

function Inscripciones() {

    const [requisitos, setRequisitos] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await fetch("http://localhost:3001/inscripciones");
            const requisitos = await response.json();
            setRequisitos(requisitos);
        })()
    }, []);


    return (
        <>
            {
                requisitos.map(requisito => {

                    const { info, copiaDni, copiaTitulo, foto, certificado } = requisito

                    return (

                        <div className="inscripciones-container">
                            <h1 className="inscripciones-titulo">Inscripciones</h1>

                            <div className="requisitos-container">
                                <h2 className="requisitos-info">{info}</h2>
                                <img className="requisitos-img" src="img/inscripciones.jpg"  alt="inscripciones_isep"/>
                            </div>

                            <div className="requisitos">
                                <h3 className="requisitos-titulo">Requisitos</h3>
                                <ul className="requisitos-lista">
                                    <li><p className="requisitos-texto">{copiaDni}</p></li>
                                    <li><p className="requisitos-texto">{copiaTitulo}</p></li>
                                    <li><p className="requisitos-texto">{foto}</p></li>
                                    <li><p className="requisitos-texto">{certificado}</p></li>
                                </ul>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Inscripciones;