import React, { Component } from "react";
import TopSeriesHijo from "../TopSeriesHijo/TopSeriesHijo";

class TopSeriesPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return(  <section class="row cards" id="on-air-today">
        {this.props.listaSeriesTop.map(peli => {
                return <TopSeriesHijo data={peli} />
            })}

        </section> )
 }
}

export default TopSeriesPadre