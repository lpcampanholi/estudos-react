import Button from "../Button/Button";
import "./Card.css";

function Card () {

    function Evento () {
        console.log("Evento")
    }

    return (
        <div className="card">
            <h2>Card</h2>
            <p>Passando evento via componente-pai</p>
            <Button event={Evento} />
        </div>
    )
}

export default Card;
