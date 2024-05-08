export const calcularTotal = (cantidad, plazo) => {

    const cantidadAPagar = parseInt(cantidad);
    const tiempoAPagar = parseInt(plazo);

    let totalCantidad;
    if (cantidadAPagar <= 1000) {
        totalCantidad = cantidadAPagar * 0.25
    } else if (cantidadAPagar > 1000 && cantidadAPagar <= 5000){
        totalCantidad = cantidadAPagar * 0.20
    } else if (cantidadAPagar > 5000 && cantidadAPagar <= 10000){
        totalCantidad = cantidadAPagar * 0.15
    } else {
        totalCantidad = cantidadAPagar * 0.10
    }

    let totalTiempo
    switch (tiempoAPagar) {
        case 3:
            totalTiempo = cantidadAPagar * 0.05;
            break;
        case 6:
            totalTiempo = cantidadAPagar * 0.10;
            break;
        case 12:
            totalTiempo = cantidadAPagar * 0.20;
            break;
        case 24:
            totalTiempo = cantidadAPagar * 0.30;
            break;
    
        default:
            break;
    }

    return totalCantidad + totalTiempo + cantidadAPagar
}