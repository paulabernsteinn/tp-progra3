import React, { Component } from "react";

class PopularesHijo extends Component{
    constructor(){
        super()
    }
    render(){
        return(
            <article class="single-card-tv">
                <img src="https://image.tmdb.org/t/p/w500/yb4F1Oocq8GfQt6iIuAgYEBokhG.jpg" class="card-img-top"
                    alt="..."/>
                <div class="cardBody">
                    <h5 class="card-title">{this.props.name}</h5>
                    <p class="card-text">The continuing story of Peacemaker, a vainglorious superhero/supervillain who
                        believes in peace at any cost — no matter how many people he has to kill. After a miraculous
                        recovery from his duel with Bloodsport, Peacemaker soon discovers that his freedom comes at a
                        price.</p>
                    <a href="serie.html" class="btn btn-primary">Ver más</a>
                    <a href="" class="btn alert-primary">♥️</a>
                </div>
            </article>
        )
    }
}

export default PopularesHijo