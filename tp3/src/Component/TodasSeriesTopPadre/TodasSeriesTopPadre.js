import React, { Component } from "react";

import TodasSeriesTopHijo from "../TodasSeriesTopHijo/TodasSeriesTopHijo";
import Filtrar from "../Filtrar/Filtrar";

class TodasSeriesTopPadre extends Component{
  constructor(props){
    super(props)
      this.state = {
        valor: '',
        data: [],
        loading: true,
        boton: 'Cargar mas',
        page: 1,
}}
  componentDidMount(){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
   }};
    
  fetch('https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1')
   .then((res) => res.json())
   .then((data) => {
     this.setState({
       data: data.results,
       loading:false,
     });
   })
   .catch((error) => console.log(error));
  }
  
  masItems(){
    const next =  this.state.page + 1;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGFkNTljMGNjMDA5MGE3MDFiZmFjYjg5M2Y2MmE4MyIsIm5iZiI6MTc1NzQ0OTc3Ny41NTksInN1YiI6IjY4YzA4ZTMxYmRiOGY3MzY2MjliZDNjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AE7116u_74D_hCFnsAHtj8OeB6PtVVgIVIU8VhMf_do'
   }};
   fetch(`https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=${next}`, options)
   .then((res) => res.json())
   .then(data => this.setState({
       data: this.state.data.concat(data.results),
       page:next,
     }))
   .catch((error) => console.log(error));
   
  }
       
    
 render(){
    return(
    <div>

        <section class="row cards" id="movies">
             {this.props.seriesTop === "" ? <h3>Cargando...</h3> : this.props.seriesTop.map(peli => {
                return <TodasSeriesTopHijo key={peli.id} data={peli} />
            })}
      {this.state.data.map((serie) => (
    <TodasSeriesTopHijo key={serie.id} data={serie} />
  ))}
        </section>
        <button onClick={() => this.masItems()}>{this.state.boton}</button>
      </div>
    )
 }
}

export default TodasSeriesTopPadre