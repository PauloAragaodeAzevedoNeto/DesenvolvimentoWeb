import HelloWorld from "./components/HelloWorld";
import IMC from "./components/IMC/IMC";
import IMCfuncao from "./components/IMC/IMCfuncao";
import MeusDados from "./components/MeusDados";
import MeusDadosProps from "./components/MeusDadosProps";
import Recursividade from "./components/Recursividade";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <IMCfuncao peso={85.0} altura={1.7} />
    </div>
  );
}
