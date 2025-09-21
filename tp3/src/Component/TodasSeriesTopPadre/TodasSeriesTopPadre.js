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
    return(
    <div>
        <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
          <input type="text" class="" name="searchData" placeholder="Buscar películas populares..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
          <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>

        <section class="row cards" id="movies">
             {this.props.seriesTop === "" ? <h3>Cargando...</h3> : this.props.seriesTop.map(peli => {
                return <TodasSeriesTopHijo key={peli.id} data={peli} />
            })}
        </section>
      </div>
    )
 }
}

export default TodasSeriesTopPadre