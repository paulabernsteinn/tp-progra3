import React, { Component } from "react";

class DetalleSerieHijo extends Component{
    constructor(props){
        super(props) 
        }
    
    render(){
        return(
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.props.PeliculaDetalle.poster_path}`}  alt=""/>
            <h2 class="alert alert-primary">{this.props.PeliculaDetalle.title}</h2>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="mt-0" id="votes"><strong>Calificación:</strong> {this.props.PeliculaDetalle.vote_average}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.props.PeliculaDetalle.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong>{this.props.PeliculaDetalle.runtime}</p>
                <p class="description"><strong>Sinopsis:</strong> {this.props.PeliculaDetalle.overview}</p>
                <p class="mt-0" id="votes"><strong>Genero:</strong> {this.props.PeliculaDetalle.genre}</p>
                <a href="" class="btn alert-primary">♥️</a>
            </section>
        </section>
        )
    }
}

// CAMBIAR LOS NOMBRES POR LOS QUE APARECEN EN EL API

export default DetalleSerieHijo