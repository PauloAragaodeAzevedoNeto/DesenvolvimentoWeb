import React from "react";
import { render } from "react-dom";

const IMCfuncao = (props) => {
  const imc = calculaIMC(props.peso, props.altura);
  const { peso, altura } = props;

  function calculaIMC(peso, altura) {
    return peso / (altura * altura);
  }
  return (
    <div>
      <h2>Peso: {peso}</h2>
      <h2>Altura: {altura}</h2>
      <h2>IMC: {imc}</h2>
      <h2>IMC: {imc.toFixed(2)}</h2>
    </div>
  );
};
export default IMCfuncao;
