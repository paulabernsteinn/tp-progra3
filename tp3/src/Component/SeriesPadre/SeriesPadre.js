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
    return(
    <div>
        <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
          <input type="text" class="" name="searchData" placeholder="Buscar películas populares..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
          <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>
        <section class="row cards all-series" id="series">
             {this.props.series === "" ? <h3>Cargando...</h3> : this.props.series.map(peli => {
                return <SeriesHijo key={peli.id} data={peli} />
            })}
        </section>
    </div>
        )
 }
}

export default SeriesPadre