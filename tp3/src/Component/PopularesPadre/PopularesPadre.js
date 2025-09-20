import React, { Component } from "react";
import PopularesHijo from "../PopularesHijo/PopularesHijo";
import Peliculas from "../../Screens/Peliculas/Peliculas";

class PopularesPadre extends Component{
      constructor(props){
        super(props)
    }
 render(){
    return(<section class="row cards" id="movies">
            {this.props.lista.map(peli => {
                return <PopularesHijo data={peli} />
            })}
           
        </section>)
 }
}

export default PopularesPadre