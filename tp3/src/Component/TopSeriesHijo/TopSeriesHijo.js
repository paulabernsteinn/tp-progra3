import React, { Component } from "react";

class TopSeriesHijo extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <article class="single-card-on-air mb-3">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <a href="serie.html" class="btn btn-primary">Ver más</a>
                    <a href="serie.html" class="btn alert-primary">🩶</a>
                </div>
            </article>
        )
    }
}

export default TopSeriesHijo