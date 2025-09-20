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
    return(<section class="row cards" id="movies">
    <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Name: </label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
       <input type="submit" value="Submit" />
     </form>
        {this.props.peliculasFiltradas === "" ? <h3>Cargando...</h3> : <h3 className="character-card">
        {this.props.peliculasFiltradas.map((item)=> <PeliculasHijo key={item.id} info={item}  />)}</h3>}
             
        {this.props.peliculas === "" ? <h3>Cargando...</h3> : this.props.peliculas.map(peli => {
                return <PeliculasHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default PeliculasPadre