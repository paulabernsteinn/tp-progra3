import React, { Component } from "react";
import PeliculasPadre from "../../Component/PeliculasPadre/PeliculasPadre";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

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
        peliculas: res.results
    })
})
  .catch(err => console.error(err));
  

}
  filtrarPeliculas(valor){
      return this.state.peliculasFiltro.filter(pelicula => pelicula.toLowerCase().includes(valor.toLowerCase()) );
      }


    render(){
       const peliculasFiltradas = this.filtrarPeliculas(this.state.valor);
        return(

          
             <div className="container">
                <h1>Udesa Movies</h1>
       <Header/>
             <section class="row cards all-movies" id="movies">
             <h2 class="alert alert-primary">Todas las películas Populares</h2>
             <PeliculasPadre peliculas={this.state.peliculas} peliculasFiltradas = {peliculasFiltradas}/>
             </section>

              <Footer />
             </div>
        )
    }

}

export default Peliculas