import React , { useState } from 'react'


const Header = (props) => {

    const [filtro, setFiltro] = useState('');

    const onChangeBuscar = (event) => {
        let valueFilter = event.target.value;
        setFiltro(valueFilter);
    }

    const handleBuscar = ()=>{
    props.filtarPropiedades(filtro);
    };

    return (
    <div id="header-page" className=" header-page">
      <div className="header-content">
        <div className="exit-header">
          <input type="text" placeholder='Maximo Personas' className='input-buscador' onChange={onChangeBuscar} />
        <button alt="imagen" onClick={handleBuscar} >Buscar</button>
        </div>
      </div>

    </div>
    )
}

export default Header