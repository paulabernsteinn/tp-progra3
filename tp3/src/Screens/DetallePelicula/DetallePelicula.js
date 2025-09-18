import React, { Component } from "react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import DetallePelicula from "../../Component/DetallePelicula/DetallePelicula";
import DetallePeliculaHijo from "../../Component/DetallePeliculaHijo/DetallePeliculaHijo";

class DetalleMovie extends Component{
    constructor(props){
        super(props)
        this.state={
            PeliculaDetalle: {}, 
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
  const id = this.props.match.params.id

fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    
    this.setState({
        PeliculaDetalle: res
    })
})
  .catch(err => console.error(err));
}
    render(){
        return(
             <div className="container">
                <h1>Udesa Movies</h1>
       <Header/>
             <section class="row cards all-movies" id="movies">
             <h2 class="alert alert-primary">Detalle de las películas Populares</h2>
             <DetallePeliculaHijo PeliculaDetalle={this.state.PeliculaDetalle} />
             </section>

              <Footer />
             </div>
        )
    }
}
export default DetalleMovie