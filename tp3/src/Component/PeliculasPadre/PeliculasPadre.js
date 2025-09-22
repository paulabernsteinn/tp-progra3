import React, { Component } from "react";

import PeliculasHijo from "../PeliculasHijo/PeliculasHijo";

class PeliculasPadre extends Component{
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
  console.log(this.state.valor);
  
    return(
      <div>
        <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
          <input type="text" class="" name="searchData" placeholder="Buscar películas populares..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
          <button type="submit" class="btn btn-success btn-sm">Buscar</button>
        </form>
    <section class="row cards" id="movies">
      
        {this.props.peliculasFiltradas === "" ? <h3>Cargando...</h3> : <h3 className="character-card">
        {this.props.peliculasFiltradas.map((item)=> <PeliculasHijo key={item.id} info={item}  />)}</h3>}
             
        {this.props.peliculas === "" ? <h3>Cargando...</h3> : this.props.peliculas.map(peli => {
                return <PeliculasHijo key={peli.id} data={peli} />
            })}
      </section>
      </div>

      )
 }
}

export default PeliculasPadre