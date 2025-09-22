import React, { Component } from "react";

class DetalleSerieHijo extends Component{
    constructor(props){
        super(props) 
        }
    
    render(){
        return(
        <section class="row">
            <img class="col-md-6" src={`https://image.tmdb.org/t/p/w500${this.props.SerieDetalle.poster_path}`}  alt=""/>
            <h2 class="alert alert-primary">{this.props.SerieDetalle.name}</h2>
            <section class="col-md-6 info">
                <h3>Descripción</h3>
                <p class="mt-0" id="votes"><strong>Calificación:</strong> {this.props.SerieDetalle.vote_average}</p>
                <p class="mt-0 mb-0" id="release-date"><strong>Fecha de estreno:</strong>{this.props.SerieDetalle.release_date}</p>
                <p class="mt-0 mb-0 length"><strong>Duración:</strong>{this.props.SerieDetalle.runtime}</p>
                <p class="description"><strong>Sinopsis:</strong> {this.props.SerieDetalle.overview}</p>
                <p class="mt-0" id="votes"><strong>Genero:</strong> {this.props.SerieDetalle.genre}</p>
                <a href="" class="btn alert-primary">♥️</a>
            </section>
        </section>
        )
    }
}

export default DetalleSerieHijo