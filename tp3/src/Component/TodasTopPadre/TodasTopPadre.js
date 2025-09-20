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
    return(<section class="row cards" id="movies">
    <form onSubmit={(event)=>this.evitarSubmit(event)}>
       <label>Name: </label>
       <input type="text" onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
       <input type="submit" value="Submit" />
     </form>
             {this.props.peliculasTop === "" ? <h3>Cargando...</h3> : this.props.peliculasTop.map(peli => {
                return <TodasTopHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default TodasTopPadre