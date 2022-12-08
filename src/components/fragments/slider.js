import React from "react";
import '../css/slider.css';

function Slider() {

  //Solucionar problema con el redireccionamiento de los link, el funcionamiento de los botones del slider
  //y el hover de los botones . Nota: Creo que tiene que ver con el código de bootstrap

  return (

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="img/motivacion-y-esfuerzo.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Estudiá una carrera con amplia salida laboral y título oficial</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/estudiantes-universitarios-20220408-1339126.jpg" className="d-block w-100" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Estudiá una carrera con amplia salida laboral y título oficial</h5>
          </div>
        </div>
        <div className="carousel-item">
          <img src="img/estudiar-online-en-casa-para-universitarios.jpg" className="d-block w-100" alt="..." />
          <div className="carousel-caption d-none d-md-block">
            <h5>Estudiá una carrera con amplia salida laboral y título oficial</h5>
          </div>
        </div>
      </div>
    </div>

  )

}

export default Slider;