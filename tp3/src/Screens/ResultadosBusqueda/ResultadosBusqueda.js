import React, { Component } from "react";
import PeliculasPadre from "../../Component/PeliculasPadre/PeliculasPadre";
import TodasTopPadre from "../../Component/TodasTopPadre/TodasTopPadre";
import PeliculasHijo from "../../Component/PeliculasHijo/PeliculasHijo";

class ResultadosBusqueda extends Component{
constructor(props) {
    super(props);
    this.state = {
        valor: this.props.match.params.name,
        data: ""
    };
    
  }
    componentDidMount (){
        fetch("https://rickandmortyapi.com/api/character/?name=" + this.state.valor)
            .then( response => response.json() )
            .then( data => this.setState({
            data: data.results,
            nextPage: data.info.next
        }) )
            .catch( error =>	console.log('El error fue: ' + error))
        }
    
    render(){
        return(
            <section className="row cards all-movies">
        {this.state.data === "" ? 
        <h3>Cargando...</h3> : 
        <div>
        <h1>Resultados de la busqueda</h1>
        <PeliculasPadre/>
        <TodasTopPadre/>
        <h3 className="alert alert-primary">{this.state.data.map((item, idx)=> <PeliculasHijo key={item + idx} info= {item} borrar = {() => this.borrar(item.id)}/> )}
        </h3>
        </div>
        }
        </section>
        )
    }
}

export default ResultadosBusqueda