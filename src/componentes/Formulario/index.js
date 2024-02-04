import './Formulario.css'
import CampoTexto from '../CampoTexto'

const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome" type="text"/>
                <CampoTexto label="Cargo" placeholder="Digite seu cargo" type="text"/>
                <CampoTexto label="Imagem" placeholder="Digite o endereço da sua imagem" type="text"/>
            </form>

        </section>
    )
}

export default Formulario