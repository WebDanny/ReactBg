import React from 'react'
import ListaPropiedades from './ListaPropiedades'
import Header from './Header'
import '../styles/home.css'


const Home = (props) => {

    return (
        <div className="container-home">

            <Header filtarPropiedades={props.filtroParam}></Header>

            <div className="container-title">
                <span className="title-header">{props.title}</span>
                <span className="count">{`${props.data.length}+ stays`}</span>
            </div>
            
            <ListaPropiedades data={props.data} />
        </div>
    )
}

export default Home
