import React, { Component } from "react";

class PeliculasHijo extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <article class="single-card-movie">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <a href="movie.html" class="btn btn-primary">Ver más</a>
                </div>
            </article>
        )
    }
}

export default PeliculasHijo