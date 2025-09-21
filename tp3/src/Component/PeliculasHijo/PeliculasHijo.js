import React, { Component } from "react";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
class PeliculasHijo extends Component{
    constructor(props){
        super(props)
         this.state={
            valor: props.value,
            verMas: false,
            textoBoton: "Ver descripción",
            favoritos: false,
            data: [],
            nextPage: "",
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

//   componentDidMount (){
    //   fetch("")
    // 	.then( response => response.json() )
    // 	.then( data => this.setState({
    //     data: data.results,
    //     nextPage: data.info.next
    //   }) )
    // 	.catch( error =>	console.log('El error fue: ' + error))

// }
// masPeliculas(){
//   fetch(this.state.nextPage)
//   .then (response => response.json())
// .then( data => this.setState({
//     data: this.state.data.concat(data.results),
//     nextPage: data.info.next
//   }) )
// 	.catch( error =>	console.log('El error fue: ' + error))
    
// }
    
    render(){
        return(
            <article class="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    
                     <p className="card-text">{this.state.verMas ? (<div> <p>Descripción: {this.props.data.overview}</p></div>) : ""}</p>
                    <p><button className="btn btn-primary" onClick={() => this.switch() }>{this.state.textoBoton}</button></p>
                </div>
                <Link className="" to ={`/peliculas/id/${this.props.data.id}`}>Detalle</Link>
                {this.state.favoritos ? <button className="btn btn-primary" onClick={() => this.quitarDeFavoritos()} >Quitar de favoritos</button> : <button className="btn btn-primary" onClick={() => this.agregarFavoritos()} >Agregar a favoritos</button>}
                {/* {this.state.favoritos ? <a href="" class="btn alert-primary" onClick={() => this.quitarDeFavoritos()} >💔</a> : <a href="" class="btn alert-primary" onClick={() => this.agregarFavoritos()} >♥️</a>} */}
            </article>
            // <button onClick={() => this.masPeliculas() }>{this.state.boton}</button>

        )
    }
}

export default PeliculasHijo