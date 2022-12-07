import { Link, Outlet } from "react-router-dom";
import React from "react";
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
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Carreras
                                </Link>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link className="dropdown-item" to="/carreras/profnivelinicial">Prof. Nivel Inicial</Link></li>
                                    <li><Link className="dropdown-item" to="/carreras/psicopedagogia">Psicopedagogía</Link></li>
                                </ul>
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