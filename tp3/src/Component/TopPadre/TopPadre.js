import React, { Component } from "react";
import TopHijo from "../TopHijo/TopHijo";

class TopPadre extends Component{
      constructor(){
        super()
    }
 render(){
    return( <section class="row cards" id="now-playing">
           {this.props.listaTop.map(peli => {
                return <TopHijo data={peli} />
            })}
        </section>)
 }
}

export default TopPadre