import "./Box.css";
import {useState} from "react";

function Box() {

  const [titulo, setTitulo] = useState("Booox");

  const clicar = () => {
    setTitulo("Cliquei")
  }

  return (
    <div>
      <div className="box" id="box">
        <h2 className="nome" onClick={clicar}>{titulo}</h2>
      </div>
    </div>
  );
}

export default Box;
