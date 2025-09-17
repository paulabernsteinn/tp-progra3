import React, { Component } from "react";

class SeriesHijo extends Component{
    constructor(){
        super() 
        this.state={
            verMas: false,
        textoBoton: "Ver Mas" 
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
   textoBoton: "Ver Mas"
  
  }); 
}
    
    }
    render(){
        return(
            <article class="single-card-tv">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top" alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    
                     <p className="card-text">{this.state.verMas ? (<div> <p>Descripcion: {this.props.data.overview}</p></div>) : ""}</p>
                    <p className="btn btn-primary"><button onClick={() => this.switch() }>{this.state.textoBoton}</button></p>
                </div>
            </article>
        )
    }
}

export default SeriesHijo