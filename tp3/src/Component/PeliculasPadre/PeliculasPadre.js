import React, { Component } from "react";

import PeliculasHijo from "../PeliculasHijo/PeliculasHijo";
import Filtrar from "../Filtrar/Filtrar";

class PeliculasPadre extends Component{
      constructor(props){
        super(props)
          this.state = {
            valor: "",
  }
    }

 render(){
  console.log(this.state.valor);
  console.log(this.props.peliculas);
  
  
    return(
      <div>
      
    <section class="row cards" id="movies">
      
        {this.props.peliculas.length === 0 ? <h3>Cargando...</h3> : 
        this.props.peliculas.map((item)=> <PeliculasHijo key={item.id} data={item}  />)}
      </section>
      </div>

      )
 }
}

export default PeliculasPadre