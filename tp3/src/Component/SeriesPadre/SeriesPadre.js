import React, { Component } from "react";


import SeriesHijo from "../SeriesHijo/SeriesHijo";

class SeriesPadre extends Component{
      constructor(props){
        super(props)
        this.state = {
        valor: "",
  }
    }
     evitarSubmit(event) {
    event.preventDefault();
  }

controlarCambios(event) {
    this.setState({valor: event.target.value});
  }
 render(){
    return(<section class="row cards all-series" id="series">

    <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Name: </label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
       <input type="submit" value="Submit" />
     </form>
             {this.props.series === "" ? <h3>Cargando...</h3> : this.props.series.map(peli => {
                return <SeriesHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default SeriesPadre