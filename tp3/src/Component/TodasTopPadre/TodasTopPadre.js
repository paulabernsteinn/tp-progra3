import React, { Component } from "react";
import TodasTopHijo from "../TodasTopHijo/TodasTopHijo";
import Filtrar from "../Filtrar/Filtrar";

class TodasTopPadre extends Component{
      constructor(props){
        super(props)
            this.state = {
            valor: "",
  }
    }
    
 
 render(){
    return(
    <div>        
        <section class="row cards" id="movies">
     
             {this.props.peliculasTop === "" ? <h3>Cargando...</h3> : this.props.peliculasTop.map(peli => {
                return <TodasTopHijo key={peli.id} data={peli} />
            })}
        </section>
    </div>    
    )
 }
}

export default TodasTopPadre