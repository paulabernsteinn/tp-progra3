import React, { Component } from "react";
import { Link } from "react-router-dom";
import DetallePeliculaHijo from "../DetallePeliculaHijo/DetallePeliculaHijo";

class DetallePelicula extends Component {
  constructor(props) {
    super(props);
  }

render() {
  console.log(this.props.peliculas);
  
    return (
      <div className="detalle-pelicula">
        {this.props.peliculas === "" ? <h3>Cargando...</h3> : this.props.peliculas.map(peli => {
            console.log(peli);
            
                return <DetallePeliculaHijo key={peli.id} data={peli} />
            })}
      </div>
    );
  }
};

export default DetallePelicula;

