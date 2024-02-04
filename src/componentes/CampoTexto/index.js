import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...`

    return (
        <div className="campo-texto">
            <label>{props.label}</label>
            <input required={props.obrigatorio} placeholder={placeholderModificado} type={props.type}/>
        </div> 
    )
}

export default CampoTexto