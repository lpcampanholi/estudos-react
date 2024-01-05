import {useState} from "react";

function Input () {

    const [texto, setTexto] = useState("Texto inicial");

    const mudarTexto = (e) => {
        setTexto(e.target.value);
    }

    return (
        <div>
            <h2>{texto}</h2>
            <input type="text" onChange={mudarTexto} />
        </div>
    )
}

export default Input;
