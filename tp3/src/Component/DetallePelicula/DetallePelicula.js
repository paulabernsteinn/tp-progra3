import React, { Component } from "react";
import { Link } from "react-router-dom";
import DetallePeliculaHijo from "../DetallePeliculaHijo/DetallePeliculaHijo";

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
  }

render() {

    return (
      <div className="detalle-pelicula">
       {this.props.peliculas.map(peli => {
                return <DetallePeliculaHijo key={peli.id} data={peli} />
            })}
      </div>
    );
  }
};

export default DetallePelicula;

