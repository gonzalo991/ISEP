import React from "react";
import { Link, Outlet } from "react-router-dom";
import '../css/header.css';

function Header() {
    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">

                    <div className="navbar-brand">
                        <img src="img/logoisep.png" alt="" width="75" height="55" />
                    </div>

                    <button className="navbar-toggler toggler-button" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/carreras">Carreras</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/noticias">Noticias</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/inscripciones">Inscripciones</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </header>
    )
}

export default Header;