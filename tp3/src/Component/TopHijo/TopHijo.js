import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class TopHijo extends Component{
    constructor(){
        super()
    }
    render(){
        return(
              <article class="single-card-playing">
                <img src={`https://image.tmdb.org/t/p/w500${this.props.data.poster_path}`} class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.data.title}</h5>
                    <p class="card-text">{this.props.data.overview}</p>
                    <Link className="btn btn-primary" to ={"/peliculastop"}>Ver Todas</Link>
                    <a href="" class="btn alert-primary">🩶</a>
                </div>
                <Link className=""to ={`/peliculas/id/${this.props.data.id}`}>Detalle</Link>
            </article>
        )
    }
}

export default TopHijo