import React, { useState } from 'react'
import Home from '../components/Home'
import '../styles/main.css'
import { lista } from '../assets/lista'

const Propiedades = () => {
    
    const [listadoPropiedades, setListadoDeCasas] = useState(lista);

    const listas = (maxGuest) =>{
        let nuevaLista = [];
        if (maxGuest) {
            nuevaLista = lista.filter(val => val.maxGuests > maxGuest)
        }else{
            nuevaLista = [...lista];
        } 

        setListadoDeCasas(nuevaLista);
    }

    return (
        <div className="contenedor">
            <Home title={"Casas en Bolivia"} data={ listadoPropiedades } filtroParam={listas} />
        </div>
    )
}

export default Propiedades