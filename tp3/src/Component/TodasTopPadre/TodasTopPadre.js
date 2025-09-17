import React, { Component } from "react";
import TodasTopHijo from "../TodasTopHijo/TodasTopHijo";

class TodasTopPadre extends Component{
      constructor(props){
        super(props)
    }
 render(){
    return(<section class="row cards" id="movies">
            {this.props.peliculasTop.map(peli => {
                return <TodasTopHijo key={peli.id} data={peli} />
            })}
        </section>)
 }
}

export default TodasTopPadre