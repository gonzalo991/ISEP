import React from "react";
import '../css/noticias.css';


function NewsList({ newsArray }) {

    return (
        <>
            <div className="noticias-anuncios">
                {
                    newsArray ?

                    newsArray.map(news => {
                        const { _id, imagen, titulo, reseña, texto } = news

                        return (

                            <div className="card" style={{ width: "25rem" }} key={_id} >
                                <img src={imagen} className="card-img-top" alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{titulo}</h5>
                                    <p className="card-text">{reseña}</p>
                                    <a to="#" className="btn btn-primary">Leer Noticia</a>
                                </div>
                            </div>
                        )
                    })

                    :
                    
                    <h2>Cargando...</h2>
                }

            </div>
        </>
    )

}

export default NewsList;