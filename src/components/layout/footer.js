import React from "react";
import Contacto from "../fragments/contacto";
import '../css/footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="logo">
                    <img src="img/logoisep.png" alt="" />
                </div>
                <div className="contacto">
                    <Contacto />
                </div>
            </div>
            <div className="copyright">
                <p> &copy;Copyright 2022  Oscar Gonzalo Araya - Técnico Universitario En Programación</p>
            </div>
        </footer>
    )
}

export default Footer;