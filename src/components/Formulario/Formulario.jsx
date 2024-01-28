import "./formulario.css"

function Formulario() {
  return (
    <div className="formulario">
      <form>
        <h2>Cadastro de DEVs</h2>
        <h3>Complete suas informações</h3>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Insira seu nome" />
        </div>
        <fieldset>
          <label htmlFor=""></label>
          <input type="text" id="sobrenome" placedholder="Insira seu Sobrenome" />
        </fieldset>

        <div>
          <label htmlFor="funcao">Front-end</label>
          <input type="radio" id="funcao" checked />
        </div>

      </form>
      <button type="submit">Cadastrar</button>
    </div>
  )
}

export default Formulario;