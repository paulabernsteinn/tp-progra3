import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./Screens/Home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Peliculas from "./Screens/Peliculas/Peliculas";
import Series from "./Screens/Series/Series";
import TodasTop from "./Screens/TodasTop/TodasTop";
import SeriesTop from "./Screens/SeriesTop/SeriesTop";
import DetallePelicula from "./Screens/DetallePelicula/DetallePelicula";
import Favoritos from "./Screens/Favoritos/Favoritos";




function App() {
  return (
    <React.Fragment>
    
    <Switch>
    
    <Route path="/" exact={true} component={Home}/>
    <Route path="/peliculaspopulares" exact={true} component={Peliculas}/>
    <Route path="/peliculastop" exact={true} component={TodasTop}/>
    <Route path="/seriespopulares" exact={true} component={Series}/>
     <Route path="/seriestop" exact={true} component={SeriesTop}/>
    <Route path="/favoritos" exact={true} component={Favoritos}/>
    <Route path="/peliculas/id/:id" component={DetallePelicula}/> 
    
    </Switch>
    
  </React.Fragment>

  );

}

export default App;