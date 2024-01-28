import { useState } from 'react';

function Input() {

  const [textoTitulo, setTextoTitulo] = useState('Título Inicial');

  function mudaTexto(e) {
    // console.log(textoTitulo)
    setTextoTitulo(e.target.value)
  }

  return (
    <>
      <h2>{textoTitulo}</h2>
      <label htmlFor="text">Testando Estado</label>
      <input type="text" name="text" id="text" placeholder="testando useState" onChange={mudaTexto} />
    </>
  )
}

export default Input;
