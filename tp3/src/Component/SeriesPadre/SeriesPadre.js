import React, { Component } from "react";


import SeriesHijo from "../SeriesHijo/SeriesHijo";

class SeriesPadre extends Component{
      constructor(props){
        super(props)
    }
 render(){
    return(<section class="row cards all-series" id="series">
             {this.props.series === "" ? <h3>Cargando...</h3> : this.props.series.map(peli => {
                return <SeriesHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default SeriesPadre