import React, { Component } from "react";
import PopularesSeriesHijo from "../PopularesSeriesHijo/PopularesSeriesHijo";


class PopularesSeriesPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return(    <section class="row cards" id="tv-show">
             {this.props.listaSeries === "" ? <h3>Cargando...</h3> : this.props.listaSeries.map(peli => {
                return <PopularesSeriesHijo data={peli} />
            })}
        </section>)
 }
}

export default PopularesSeriesPadre