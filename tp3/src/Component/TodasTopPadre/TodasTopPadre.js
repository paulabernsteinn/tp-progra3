import React, { Component } from "react";
import TodasTopHijo from "../TodasTopHijo/TodasTopHijo";

class TodasTopPadre extends Component{
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
        <form className="search" onSubmit={(event)=>this.evitarSubmit(event)}>
          <input type="text" className="search-input" placeholder="Buscar peliculas top rated..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
          <button type="submit" className="search-button">Buscar</button>
        </form>
        
        <section class="row cards" id="movies">
     
             {this.props.peliculasTop === "" ? <h3>Cargando...</h3> : this.props.peliculasTop.map(peli => {
                return <TodasTopHijo key={peli.id} data={peli} />
            })}
        </section>
    </div>    
    )
 }
}

export default TodasTopPadre