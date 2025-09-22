import React, { Component } from "react";
import { withRouter } from "react-router-dom";


class Filtrar extends Component{
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
    this.setState({valor: event.target.value}, () => this.props.filtrar(this.state.valor));
  }

    render(){
        console.log(this.props.hola);
        
        return(
        <form className="search-form" onSubmit={(event)=>this.evitarSubmit(event)}>
          <input type="text" class="" name="searchData" placeholder="Filtrar..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor} />
        </form>
        )
    }
}

export default withRouter(Filtrar)