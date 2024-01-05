import { useState } from "react";

function Texto() {
  const [texto, setTexto] = useState("Título inicial");

  const mudarTitulo = () => {
    setTexto("Mudei via botão")
  }

  return (
    <div>
      <p>{texto}</p>
      <button onClick={mudarTitulo}>Mudar texto</button>
    </div>
  );
}

export default Texto;
