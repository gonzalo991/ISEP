import React from "react";
import '../css/sobrenos.css';


function SobreNos({ texto }) {


    return (
        <>
            <h1 className="cabecera">Sobre Nosotros</h1>
            <div className="contenido">
                <img src='img/Consejos-financieros-para-estudiantes-universitarios.png' />
                <div className="texto-container">
                    <h2 className="texto-titulo">I.S.E.P N°8232</h2>
                    <p className="texto-parrafo">Somos el Instituto Superior de Educación Profesional, formamos a nuestro alumnos con la mayor dedicación para que lleguen a ser grandes profesionales y tengan éxito en sus carreras.
                        Nuestra sede está ubicada en Av. 9 de Julio N° 116 en la ciudad de San José de Metán.
                    </p>
                </div>
            </div>
        </>
    )
}

export default SobreNos;