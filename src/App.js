import "./App.css";
import Card from "./components/Card/Card";
import CapsLock from "./components/CapsLock/CapsLock";
import Input from "./components/Input/Input";
import Condicional from "./components/Condicional/Condicional.jsx";
import ImprimeListas from "./components/ImprimeListas/ImprimeListas.jsx";
import StateLift from "./components/StateLift/StateLift.jsx";
import Formulario from "./components/Formulario/Formulario.jsx";

function App() {
  const frameworks = ["React", "Vue", "Angular", "JavaScript", "", 0.5];

  return (
    <div className="App">
      <Card />
      <Card />
      <CapsLock>Olá, estou passando este texto via props children</CapsLock>
      <Input />
      <Condicional />
      <ImprimeListas lista={frameworks} />
      <StateLift />
      <Formulario />
    </div>
  );
}

export default App;
