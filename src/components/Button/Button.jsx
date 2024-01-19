import "./Button.css"

function Button (props) {
    return <button className="button" onClick={props.event}>Evento</button>
}

export default Button;