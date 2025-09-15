import React, { Component } from "react";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import PopularesPadre from "../../Component/PopularesPadre/PopularesPadre";
import NowPadre from "../../Component/NowPadre/NowPadre";
import PopularesSeriesPadre from "../../Component/PopularesSeriesPadre/PopularesSeriesPadre";
import NowSeriesPadre from "../../Component/NowSeriesPadre/NowSeriesPadre";


class Home extends Component{

    constructor(){
        super()
        this.state= {
            peliculasPopulares: []
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
    let filtro = res.results.filter((peli, idx) => idx < 5)
    this.setState({
        peliculasPopulares: filtro
    })
})
  .catch(err => console.error(err));
    }

  render(){ return (
    <div className="container">
        <h1>Udesa Movies</h1>
       <Header/>
     <h2 class="alert alert-primary">Popular movies this week</h2>
     <PopularesPadre lista={this.state.peliculasPopulares} />
      <h2 class="alert alert-primary">Movies now playing</h2>
      <NowPadre/>
       <h2 class="alert alert-warning">Popular TV shows this week</h2>
       <PopularesSeriesPadre/>
       <h2 class="alert alert-warning">TV shows airing today</h2>
       <NowSeriesPadre/>
      <Footer />
    </div>
  );}
}

export default Home;