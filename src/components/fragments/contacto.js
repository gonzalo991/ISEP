import React, { useState } from "react";
import '../css/contacto.css';

function FormInput(props) {
    const { labelText, id, name } = props;
    const type = props.type || "text";
    const [value, setValue] = useState(null);

    const handleChange = ev => {
        setValue(ev.target.value);
    }

    return (
        <div className="campo">
            <label htmlFor={id}>{labelText}</label>
            <input type={type} id={id} name={name}
                onChange={handleChange} value={value} />
        </div>
    )
}

function Contacto() {
    return (
        <>
            <h2 className="contacto-title">Contacto</h2>
            <form className="contacto-formulario" action="/send-email" method="POST">
                <div className="campos">
                    <FormInput labelText="Nombre y Apellido" id="nombre" name="nombre" />
                    <FormInput labelText="Email" id="email" name="email" type="email" />
                    <FormInput labelText="Teléfono" id="telefono" name="telefono" />
                    <FormInput labelText="Asunto" id="asunto" name="asunto" />
                </div>
                <textarea name="consulta" id="consulta" cols="60" rows="6" placeholder="Escriba su consulta aquí..."></textarea>
                <button type="submit" className="boton-enviar">Enviar</button>
            </form>
        </>
    )
}

export default Contacto;