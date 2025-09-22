import React, { Component } from "react";
import PeliculasPadre from "../../Component/PeliculasPadre/PeliculasPadre";
import TodasTopPadre from "../../Component/TodasTopPadre/TodasTopPadre";
import PeliculasHijo from "../../Component/PeliculasHijo/PeliculasHijo";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";

class ResultadosBusqueda extends Component{
constructor(props) {
    super(props);
    this.state = {
        valor: this.props.match.params.name,
        data: []
    };
    
  }
    componentDidMount (){
        console.log(this.state.valor);

        console.log(this.props.match.params.tipo);
        

        let tipo = this.props.match.params.tipo
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
            }
          };

          
        if(tipo === "movie"){
        

        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.valor}&include_adult=false&language=en-US&page=1`,options)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                
            this.setState({
            data: data.results,
            
        }) } )
            .catch( error =>	console.log('El error fue: ' + error))
        }else{
            fetch(`https://api.themoviedb.org/3/search/tv?query=${this.state.valor}&include_adult=false&language=en-US&page=1`,options)
            .then( response => response.json() )
            .then( data => {
                console.log(data);
                
            this.setState({
            data: data.results,
            
        }) } )
            .catch( error =>	console.log('El error fue: ' + error))

        }
    }
    
    render(){
        console.log(this.state.data);
        
        return(
            <section className="row cards all-movies">
        {this.state.data === "" ? 
        <h3>Cargando...</h3> : 


        <div className="container">
            <h1>UdeSA Movies</h1>
            <Header/>
            <h2 class="alert alert-primary">Resultados de la busqueda</h2>

                <section class="row cards all-movies" id="movies">
                    {this.state.data.map(peli => <PeliculasHijo data={peli} /> )} 
                </section>
            <Footer/>
        </div>

        }
        </section>
        )
    }
}

export default ResultadosBusqueda