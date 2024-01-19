import { useState } from 'react';

function Condicional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviaDados(e) {
    e.preventDefault();
    setUserEmail(email);
  }

  function limparEmail() {
    setUserEmail('');
  }

  return (
    <div>
      <h2>Renderização Condicional</h2>
      <form>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" placeholder="Insira seu E-mail" onChange={(e) => setEmail(e.target.value)} />
        <button type="submit" onClick={enviaDados}>Enviar</button>
      </form>
      {userEmail && (
        <div>
          <p>O e-mail do usuário é: {userEmail}</p>
          <button onClick={limparEmail}>Limpar</button>
        </div>
      )}
    </div>
  )
}

export default Condicional;