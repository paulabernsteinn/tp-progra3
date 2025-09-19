import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import TopHijo from "../../Component/TopHijo/TopHijo";

class Favoritos extends Component{

    constructor (props){
       super(props);
       this.state = {
       lista: [],
       PeliculaDetalle: {}
     }
   
   }
   componentDidMount (){
    let recuperarfavoritos= localStorage.getItem('favoritos')
    let parseoFavs = JSON.parse(recuperarfavoritos)
    let favoritos = []
    parseoFavs.map(favid => {
    const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
          }
          };
            const id = this.props.match.params.id
          
        fetch(`https://api.themoviedb.org/3/movie/${favid}?language=en-US`, options)
        .then( response => response.json())
       .then( data =>{
        favoritos.push(data)
        this.setState({
        lista: favoritos
     })} )
       .catch( error =>	console.log('El error fue: ' + error))
    })


   }
   
render(){
    console.log(this.state.lista); 
    return (
    <div></div>
      );
    }
  }

export default Favoritos