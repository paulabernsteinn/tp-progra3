import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class PeliculasHijo extends Component{
    constructor(props){
        super(props)
         this.state={
            valor: props.value,
            verMas: false,
        textoBoton: "Ver Mas",
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
   textoBoton: "Ver Mas"
  
  }); 
}
    
    }
    componentDidMount (){
        let recuperarfavs = localStorage.getItem('favoritos');
        if (recuperarfavs !== null) {
          let parseoFavs = JSON.parse(recuperarfavs);
          let filtrados = parseoFavs.filter(id => id == this.props.data.id);
          if (filtrados.length > 0) {
            this.setState({ favoritos: true });
          }
        }
      }
      
      agregarFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritos');
        if (recuperarfavs === null){
          let arrayFavs= []
          arrayFavs.push(this.props.data.id)
          let arrayToString = JSON.stringify(arrayFavs)
          localStorage.setItem('favoritos', arrayToString)
        }
        else{
          let parseoFavs = JSON.parse(recuperarfavs)
          parseoFavs.push(this.props.data.id)
          let arrayToString = JSON.stringify(parseoFavs)
          localStorage.setItem('favoritos', arrayToString)
        }
        this.setState({
          favoritos: true
        })
        
      }
      
      quitarDeFavoritos(){
        let recuperarfavs = localStorage.getItem('favoritos');
        let parseoFavs = JSON.parse(recuperarfavs)
        let filtrados = parseoFavs.filter(id => id != this.props.data.id)
        let arrayToString = JSON.stringify(filtrados)
        localStorage.setItem('favoritos', arrayToString)
      
          this.setState({
          favoritos: false
        })
      
      }
    
    render(){
        return(
            <article class="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    
                     <p className="card-text">{this.state.verMas ? (<div> <p>Descripcion: {this.props.data.overview}</p></div>) : ""}</p>
                    <p className="btn btn-primary"><button onClick={() => this.switch() }>{this.state.textoBoton}</button></p>
                </div>
                <Link className=""to ={`/peliculas/id/${this.props.data.id}`}>Detalle</Link>
                <div className="more"><button onClick={() => this.switch() }>{this.state.textoBoton}</button></div>
                {this.state.favoritos ? <button onClick={() => this.quitarDeFavoritos()} >Quitar de favoritos</button> : <button onClick={() => this.agregarFavoritos()} >Agregar a favoritos</button>}

                
            </article>
        )
    }
}

export default PeliculasHijo