import React, { Component } from "react";

class MeusDadosProps extends Component {
  render() {
    const { nome, curso } = this.props;
    return (
      <div>
        <h2>Nome: {nome}</h2>
        <h2>Curso: {curso}</h2>
      </div>
    );
  }
}
export default MeusDadosProps;
