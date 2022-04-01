import HelloWorld from "./components/HelloWorld";
import IMC from "./components/IMC/IMC";
import MeusDados from "./components/MeusDados";
import MeusDadosProps from "./components/MeusDadosProps";
import Recursividade from "./components/Recursividade";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <IMC peso="80.00" altura="1.70" />
    </div>
  );
}
