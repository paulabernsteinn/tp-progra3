import React, { Component } from "react";
import Buscador from "../Buscador/Buscador";

class Header extends Component{
    constructor(){
        super()
    }

    render(){
        return(
                      <nav>
            <ul class="nav nav-tabs my-4">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculaspopulares">Películas Populares</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/peliculastop">Películas Top Rated</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/seriespopulares">Series Populares</a>
                </li>
                 <li class="nav-item">
                    <a class="nav-link" href="/seriestop">Series Top Rated</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/favoritos">Favoritas</a>
                </li>
            </ul>
        </nav>
        )
    }
}

export default Header