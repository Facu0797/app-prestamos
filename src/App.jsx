import './App.css';
import React, { useState } from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario';
import Cotizacion from './Componentes/Cotizacion';
import Mensaje from './Componentes/Mensaje';

function App() {

  const [cantidad, setCantidad] = useState(0);
  const [plazo, setPlazo] = useState("");
  const [total, setTotal] = useState(0);

  let componente;
  if (total === 0) {
    componente = <Mensaje />
  } else {
    componente = <Cotizacion  
                    cantidad={cantidad}
                    plazo={plazo}
                    total={total}
                  />
  }

  return (
    <>
      <Header titulo={"App de prestamos"}/>
      <div className="container">
        <Formulario 
          cantidad={cantidad}
          setCantidad={setCantidad}
          plazo={plazo}
          setPlazo={setPlazo}
          setTotal={setTotal}
        />
      </div>
      <div className="mensaje">
        {componente}
      </div>
    </>
    
  )
}

export default App
