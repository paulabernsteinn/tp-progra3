import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./Screens/Home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom";
import Peliculas from "./Screens/Peliculas/Peliculas";
import Series from "./Screens/Series/Series";



function App() {
  return (
    <React.Fragment>
    
    <Switch>
    
    <Route path="/" exact={true} component={Home}/>
    <Route path="/peliculas" exact={true} component={Peliculas}/>
    <Route path="/series" exact={true} component={Series}/>
    <Route path="/favoritos" exact={true} component={Peliculas}/>
    
    </Switch>
    
  </React.Fragment>

  );

}

export default App;