import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class PopularesSeriesHijo extends Component{
    constructor(props){
        super(props)
        this.state={
            valor: props.value,
            verMas: false,
        textoBoton: "Ver descripción",
        favoritos: false
        }
    }

switch(){
    if (this.state.verMas == false){
     this.setState({
   
    verMas: true,
   textoBoton: "Ver Menos"
   
  }); 

} else {
      this.setState({
   
    verMas: false,
   textoBoton: "Ver descripción"
  
  }); 
}
 }
    
    render(){
        return(
         <article class="single-card-tv">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.name}</h5>
                    <p className="card-text">{this.state.verMas ? (<div> <p>{this.props.data.overview}</p></div>) : ""}</p>
                    <p><button className="btn btn-primary" onClick={() => this.switch() }>{this.state.textoBoton}</button></p>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
                <Link className=""to ={`/seriesr/id/${this.props.data.id}`}>Detalle</Link>

            </article>
        )
    }
}

export default PopularesSeriesHijo