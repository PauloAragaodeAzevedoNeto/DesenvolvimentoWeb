import React, { Component } from "react";

class CidadesSimples extends Component {
  constructor(props) {
    super(props);
    this.state = { fortaleza: 0, crato: 0 };
  }
  votarFortaleza() {
    this.setState({ fortaleza: this.state.fortaleza + 1 });
  }
  votarCrato() {
    this.setState({ crato: this.state.crato + 1 });
  }

  render() {
    return (
      <div>
        <h2>Fortaleza: {this.state.fortaleza}</h2>
        <h2>Crato: {this.state.crato}</h2>
        <button onClick={() => this.votarFortaleza()}>
          Votar em Fortaleza
        </button>
        <button onClick={() => this.votarCrato()}>Votar em Crato</button>
      </div>
    );
  }
}
export default CidadesSimples;
