import React, { Component } from "react";

import PeliculasHijo from "../PeliculasHijo/PeliculasHijo";

class PeliculasPadre extends Component{
      constructor(props){
        super(props)
    }
 render(){
    return(<section class="row cards" id="movies">
            {this.props.peliculas.map(peli => {
                return <PeliculasHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default PeliculasPadre