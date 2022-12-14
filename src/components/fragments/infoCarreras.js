import React from "react";
import '../css/carreras.css';

function InfoCarreras({ props }) {

    return (
        <>
            {
                props.map(carreraInfo => {

                    const { carrera, titulo, duracion, instituto, modalidad, horarios } = carreraInfo;

                    return (
                        <table className="tabla table-sm table-bordered">
                            <tbody>
                                <tr>
                                    <th scope="row">Carrera</th>
                                    <td>{carrera}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Título</th>
                                    <td>{titulo}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Duración</th>
                                    <td>{duracion}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Instituto</th>
                                    <td>{instituto}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Modalidad</th>
                                    <td>{modalidad}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Horarios</th>
                                    <td>{horarios}</td>
                                </tr>
                            </tbody>
                        </table>
                    )
                })
            }
        </>

    )
}

export default InfoCarreras;