import React, { useState } from 'react';
import {calcularTotal} from "../helpers";

const Formulario = ({ cantidad, setCantidad, plazo, setPlazo, setTotal }) => {

    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (cantidad <= 0 || cantidad === "" || plazo === "") {
            setError(true);
            return;
        }
        setError(false);

        const total = calcularTotal(cantidad, plazo);
        setTotal(total)
    }

    return (
        <>
            <form onSubmit={handleSubmit} action="">
                <div className="column">
                    <div>
                        <label> Cantidad de prestamo </label>
                        <input onChange={(e) => setCantidad(e.target.value)} type="number" placeholder='Ej: 1000€' />
                    </div>
                    <div>
                        <label> Plazo para pagar </label>
                        <select onChange={(e) => setPlazo(e.target.value)}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 Meses</option>
                            <option value="6">6 Meses</option>
                            <option value="12">12 Meses</option>
                            <option value="24">24 Meses</option>
                        </select>
                    </div>
                </div>
                <div className="btnSubmit">
                    <input type="submit" value="Calcular" />
                </div>
            </form>
            {error ? <p className="error">Los campos son invalidos</p> : null}
            
        </>
    );
}

export default Formulario;