import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Buscador extends Component{
    constructor(props){
        super(props)
          this.state = {
            valor: "",
            tipo: "movie"
  }
    }
 evitarSubmit(event) {
    event.preventDefault();
    this.props.history.push("/search/" + this.state.valor+ "/" + this.state.tipo)
  }

controlarCambios(event) {
    this.setState({valor: event.target.value});
  }

controlarTipo = (event=> {
  this.setState({tipo: event.target.value})
});

    render(){
        return(
              <form class="search-form" action="results.html" method="get" onSubmit={(event)=>this.evitarSubmit(event)}>
                <input type="text" class="" name="searchData" placeholder="Buscar..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
                <select onChange={this.controlarTipo} value = {this.state.tipo}>
                  <option value="pelicula"> movies </option>
                  <option value="series"> tv shows </option>
                </select>
                <button type="submit" class="btn btn-success btn-sm"> Search</button>
            </form>
        )
    }
}

export default withRouter(Buscador)