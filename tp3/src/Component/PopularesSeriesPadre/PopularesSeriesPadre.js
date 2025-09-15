import React, { Component } from "react";
import PopularesHijo from "../PopularesHijo/PopularesHijo";

class PopularesSeriesPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return(    <section class="row cards" id="tv-show">
            {this.props.listaSeries.map(peli => {
                return <PopularesHijo data={peli} />
            })}
        </section>)
 }
}

export default PopularesSeriesPadre