import React from 'react';

const Cotizacion = ({total, cantidad, plazo}) => {
    return ( 
        <div className="resultado">
            <h2>Cotizacion</h2>
            <p>La cantidad solicitada es: {cantidad}€</p>
            <p>A pagar en : {plazo} Meses</p>
            <p>Su pago mensual es de: {(total / plazo).toFixed(2)}€</p>
            <p>El total a pagar es de: {total}€</p>
        </div>    
    );
}
 
export default Cotizacion;