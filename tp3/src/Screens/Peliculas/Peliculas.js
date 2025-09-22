import React, { Component } from "react";
import PeliculasPadre from "../../Component/PeliculasPadre/PeliculasPadre";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import Filtrar from "../../Component/Filtrar/Filtrar";

class Peliculas extends Component{
    constructor(){
        super()
        this.state={
            peliculas: [],
            cargarMas: "Cargar Mas",
            valor: "",
            peliculasFiltro: []
            
        }
    }
    componentDidMount(){
      const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
  }
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    
    this.setState({
        peliculas: res.results,
        peliculasFiltro: res.results,
    })
})
  .catch(err => console.error(err));
  

}
  filtrarPeliculas(valor){
      let nuevoArray = this.state.peliculas.filter(pelicula => pelicula.title.toLowerCase().includes(valor.toLowerCase()) );
      this.setState({
        peliculasFiltro: nuevoArray
      })
      }


    render(){
       
        return(
             <div className="container">
                <h1>UdeSA Movies</h1>
                
       <Header/>
       <Filtrar filtrar={(id) => this.filtrarPeliculas(id)} />
             <section class="row cards all-movies" id="movies">
             <h2 class="alert alert-primary">Todas las películas Populares</h2>
             <PeliculasPadre peliculas={this.state.peliculasFiltro} />
             </section>

              <Footer />
             </div>
        )
    }

}

export default Peliculas