import "./formulario.css"
import { useState } from 'react';

function Formulario() {

  const [nome, setNome] = useState();
  const [sobrenome, setSobrenome] = useState();
  const [email, setEmail] = useState();

  return (
    <div className="formulario">
      <form>
        <h2>Cadastro de DEVs</h2>
        <p>Complete suas informações:</p>

        <div className="campo">
          <label htmlFor="nome">Nome</label>
          <input className="caixa" type="text" id="nome" placeholder="Insira seu nome" required onChange={(e) => setNome(e.target.value)} />
        </div>
        <div className="campo">
          <label htmlFor="sobrenome">Sobrenome</label>
          <input className="caixa" type="text" id="sobrenome" placeholder="Insira seu Sobrenome" required onChange={(e) => setSobrenome(e.target.value)} />
        </div>

        <div className="campo">
          <label htmlFor="email">E-mail</label>
          <input className="caixa" type="email" id="email" placeholder="Insira seu E-mail" required onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="campo">
          <label>
            <input type="radio" name="area" id="frontend" />Front-end
          </label>
          <label>
            <input type="radio" name="area" id="backend" />Back-end
          </label>
          <label>
            <input type="radio" name="area" id="fullstack" />Fullstack
          </label>
        </div>

        <div className="campo">
          <label htmlFor="senioridade">Senioridade</label>
          <select className="caixa" id="senioridade">
            <option value="">Selecione</option>
            <option value="junior">Júnior</option>
            <option value="pleno">Pleno</option>
            <option value="senior">Sênior</option>
          </select>
        </div>

        <div>
          <p>Selecione as tecnologias que utiliza:</p>
          <div className="tecnologias">
            <input type="checkbox" id="tecnologia1" value="HTML" />
            <label htmlFor="tecnologia1">HTML</label>
            <input type="checkbox" id="tecnologia2" value="CSS" />
            <label htmlFor="tecnologia2">CSS</label>
            <input type="checkbox" id="tecnologia3" value="JavaScript" />
            <label htmlFor="tecnologia3">JavaScript</label>
            <input type="checkbox" id="tecnologia4" value="PHP" />
            <label htmlFor="tecnologia4">PHP</label>
            <input type="checkbox" id="tecnologia5" value="C#" />
            <label htmlFor="tecnologia5">C#</label>
            <input type="checkbox" id="tecnologia6" value="Python" />
            <label htmlFor="tecnologia6">Python</label>
            <input type="checkbox" id="tecnologia7" value="Java" />
            <label htmlFor="tecnologia7">Java</label>
          </div>
        </div>

        <div className="campo">
          <label htmlFor="experiencia">Conte um pouco mais da sua experiência:</label>
          <textarea className="caixa" name="experiencia" id="experiencia" rows="10"></textarea>
        </div>

      </form>
      <button className="button" type="submit">Cadastrar</button>

      <p>Nome: {nome}</p>
      <p>Sobrenome: {sobrenome}</p>
      <p>E-mail: {email}</p>
    </div>
  )
}

export default Formulario;