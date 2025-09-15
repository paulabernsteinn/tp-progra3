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
                    <a class="nav-link" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="movies.html">Películas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="series.html">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="favorites.html">Favoritas</a>
                </li>
            </ul>
            <Buscador/>
        </nav>
        )
    }
}

export default Header