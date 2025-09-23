import React, { Component } from "react";
import PopularesSeriesHijo from "../PopularesSeriesHijo/PopularesSeriesHijo";
import PopularesHijo from "../PopularesHijo/PopularesHijo";

class PopularesSeriesPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return(    <section class="row cards" id="tv-show">
            {this.props.listaSeries.map(peli => {
                return <PopularesSeriesHijo data={peli} />
            })}
        </section>)
 }
}

export default PopularesSeriesPadre