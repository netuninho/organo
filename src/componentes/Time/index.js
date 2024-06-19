import React from 'react';
import Cards from '../Cards'
import './Time.css'


const Time = (props) => {
    return (
        props.cadastros.length > 0 ?
        
        <section className='time' style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='cadastrados'>
            {props.cadastros.map(cadastro => <Cards corDeFundo={props.corPrimaria} key={cadastro.nome} nome={cadastro.nome} cargo={cadastro.cargo} imagem={cadastro.imagem}/>)}
            </div>
        </section>

        : ''
    )
}

export default Time