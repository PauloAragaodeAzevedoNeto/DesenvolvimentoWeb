import HelloWorld from "./components/HelloWorld";
import MeusDados from "./components/MeusDados";
import MeusDadosProps from "./components/MeusDadosProps";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <MeusDadosProps nome="Paulo" curso="RC" />
    </div>
  );
}
