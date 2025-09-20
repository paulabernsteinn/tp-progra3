import React, { Component } from "react";

import TodasSeriesTopHijo from "../TodasSeriesTopHijo/TodasSeriesTopHijo";

class TodasSeriesTopPadre extends Component{
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
    return(<section class="row cards" id="movies">
        <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Name: </label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
       <input type="submit" value="Submit" />
     </form>
             {this.props.seriesTop === "" ? <h3>Cargando...</h3> : this.props.seriesTop.map(peli => {
                return <TodasSeriesTopHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default TodasSeriesTopPadre