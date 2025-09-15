import React from "react";
import { Switch } from "react-router-dom/cjs/react-router-dom";
import Home from "./Screens/Home/Home";
import { Route } from "react-router-dom/cjs/react-router-dom";



function App() {
  return (
    <React.Fragment>
    
    <Switch>
    
    <Route path="/" exact={true} component={Home}/>
    
    </Switch>
    
  </React.Fragment>

  );

}

export default App;