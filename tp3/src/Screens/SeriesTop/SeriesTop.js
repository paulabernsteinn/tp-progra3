import React, { Component } from "react";

import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import TodasSeriesTopPadre from "../../Component/TodasSeriesTopPadre/TodasSeriesTopPadre";

class Series extends Component{
    constructor(){
        super()
        this.state={
            seriesTop: []
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

fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => {
    console.log(res)
    
    this.setState({
        seriesTop: res.results
    })
})
  .catch(err => console.error(err));
    }

    render(){
        return(
             <div className="container">
                <h1>UdeSA Movies</h1>
       <Header/>
             <section class="row cards all-movies" id="movies">
             <h2 class="alert alert-primary">Todas las Series Top Rated</h2>
             <TodasSeriesTopPadre seriesTop={this.state.seriesTop}/>
             </section>

              <Footer />
             </div>
        )
    }

}

export default Series