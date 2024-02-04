import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    const aoDigitar = (evento) => {
        props.aoAlterar(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitar} required={props.obrigatorio} placeholder={placeholderModificado} type={props.type}/>
        </div> 
    )
}

export default CampoTexto