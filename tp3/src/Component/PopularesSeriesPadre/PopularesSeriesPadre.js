import React, { Component } from "react";
import PopularesSeriesHijo from "../PopularesSeriesHijo/PopularesSeriesHijo";
import Filtrar from "../Filtrar/Filtrar";


class PopularesSeriesPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return( 
        <div> 
        <Filtrar/>
        <section class="row cards" id="tv-show">
             {this.props.listaSeries === "" ? <h3>Cargando...</h3> : this.props.listaSeries.map(peli => {
                return <PopularesSeriesHijo data={peli} />
            })}
        </section>
        </div>  
        )
 }
}

export default PopularesSeriesPadre