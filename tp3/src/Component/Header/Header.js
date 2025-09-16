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
                    <a class="nav-link" href="/peliculas">Películas</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/series">Series</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/favoritos">Favoritas</a>
                </li>
            </ul>
            <Buscador/>
        </nav>
        )
    }
}

export default Header