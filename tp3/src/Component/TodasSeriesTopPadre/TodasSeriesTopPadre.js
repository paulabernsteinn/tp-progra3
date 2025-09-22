import React, { Component } from "react";

import TodasSeriesTopHijo from "../TodasSeriesTopHijo/TodasSeriesTopHijo";
import Filtrar from "../Filtrar/Filtrar";

class TodasSeriesTopPadre extends Component{
      constructor(props){
        super(props)
            this.state = {
            valor: "",
  }
  
    }
       
    
 render(){
    return(
    <div>
          <Filtrar/>

        <section class="row cards" id="movies">
             {this.props.seriesTop === "" ? <h3>Cargando...</h3> : this.props.seriesTop.map(peli => {
                return <TodasSeriesTopHijo key={peli.id} data={peli} />
            })}
        </section>
      </div>
    )
 }
}

export default TodasSeriesTopPadre