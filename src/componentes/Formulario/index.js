import React from 'react';
import { useState } from 'react'
import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import Botao from '../Botao'


const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCadastrar ({
            nome,
            cargo,
            imagem,
            time
        })
        
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }    

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    valor={nome} 
                    aoAlterar={valor => setNome(valor)} 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    type="text"
                />

                <CampoTexto 
                    valor={cargo} 
                    aoAlterar={valor => setCargo(valor)} 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    type="text"
                />

                <CampoTexto 
                    valor={imagem} 
                    aoAlterar={valor => setImagem(valor)} 
                    label="Imagem" 
                    placeholder="Digite o endereço da sua imagem" 
                    type="text"
                />

                <ListaSuspensa 
                    valor={time} 
                    aoAlterado={valor => setTime(valor)} 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>

        </section>
    )
}

export default Formulario