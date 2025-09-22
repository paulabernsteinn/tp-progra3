import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TopHijo from "../../Component/TopHijo/TopHijo";
import TopSeriesHijo from "../../Component/TopSeriesHijo/TopSeriesHijo";


class Favoritos extends Component{

    constructor (props){
       super(props);
       this.state = {
        movies: [],
        series: [],
       PeliculaDetalle: {}
     }
   
   }
   componentDidMount (){
    let recuperarfavoritospeli= localStorage.getItem('favoritosPeli')
    let parseoFavsPeli = JSON.parse(recuperarfavoritospeli)

    let recuperarfavoritosserie= localStorage.getItem('favoritosSerie')
    let parseoFavsSerie = JSON.parse(recuperarfavoritosserie)
    
    const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
         },
          };
          let moviesFavs = [];
          let seriesFavs = [];
 parseoFavsPeli.map(favid => {
            const id = this.props.match.params.id
          
        fetch(`https://api.themoviedb.org/3/movie/${favid}?language=en-US`, options)
        .then( response => response.json())
       .then( data =>{
        moviesFavs.push(data)
        this.setState({
        movies: moviesFavs
     })} )
       .catch( error =>	console.log('El error fue: ' + error))})
      
parseoFavsSerie.map(favid => {
        const id = this.props.match.params.id
       fetch(`https://api.themoviedb.org/3/tv/${favid}?language=en-US`, options)
        .then( response => response.json())
       .then( data =>{
        seriesFavs.push(data)
        this.setState({
        series: seriesFavs
     })} )
       .catch( error =>	console.log('El error fue: ' + error))
    })}
  
render(){
    console.log(this.state.lista); 
    return (
    <div>
        <h1>Peliculas favoritas </h1>
        <section className="more">
            {this.state.movies.map(peli => (
              <TopHijo 
              data={peli}
              />
            ))}
             <h1>Series favoritas </h1>
              {this.state.series.map(serie => (
              <TopSeriesHijo 
              data={serie}
              />
            ))}
          </section>
    </div>
      );
    }
  }

export default Favoritos