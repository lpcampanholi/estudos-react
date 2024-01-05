import "./App.css";
import Frase from "./components/Frase.js";
import Dragao from "./components/Dragao.js";
import Texto from "./components/Texto/Texto.jsx";
import Box from "./components/Box/Box.jsx";
import Input from "./components/Input/Input.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";

function App() {
  return (
    <div className="App">
      <Formulario />
      <Input />
      <Input />

      <Box />
      <Box />
      <Texto />
      <Texto />
      <Texto />

      <Dragao />

      <Frase nome="José" paragrafo="true" cor="red" />
      <Frase nome="Alberto" paragrafo="true" cor="purple" />
      <Frase cor="blue" />
    </div>
  );
}

export default App;
