import React, { Component } from "react";

class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: "La página que buscas no existe"
    };
  }

  render() {
    return (
      <div>
        <h1>404 - Página No Encontrada</h1>
        <p>{this.state.mensaje}</p>
      </div>
    );
  }
}

export default NotFound;
