import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class DetallePeliculaHijo extends Component{
    constructor(props){
        super(props)
         this.state={
            valor: props.value,
            favoritos: false,

        }
         }
    
         componentDidMount (){
            console.log(this.props);
            
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
        console.log(this.props.data);
        return(
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`}  alt=""/>
            <h2 class="alert alert-primary">{this.props.data.titlea}</h2>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="mt-0" id="votes"><strong>Calificación:</strong> {this.props.data.vote_average}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.props.data.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong>{this.props.data.runtime}</p>
                <p class="description"><strong>Sinopsis:</strong> {this.props.data.overview}</p>
                <p class="mt-0" id="votes"><strong>Genero:</strong> {this.props.data.genre}</p>
                {this.state.favoritos ? <a href="" class="btn alert-primary" onClick={() => this.quitarDeFavoritos()}>❌</a> : <a href="" class="btn alert-primary" onClick={() => this.agregarFavoritos()} >♥️</a>}
            </section>
        </section>
        )
    }
}

export default DetallePeliculaHijo