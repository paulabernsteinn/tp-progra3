import React, { Component } from "react";

class Buscador extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
              <form class="search-form" action="results.html" method="get">
                <input type="text" class="" name="searchData" placeholder="Buscar..." value=""/>
                <button type="submit" class="btn btn-success btn-sm">Buscar</button>
            </form>
        )
    }
}

export default Buscador

// import React, { Component } from "react";

// class Buscador extends Component{
//     constructor(props){
//         super(props)
//           this.state = {
//             valor: "",
//   }
//     }
//  evitarSubmit(event) {
//     event.preventDefault();
//   }

// controlarCambios(event) {
//     this.setState({valor: event.target.value});
//   }

//     render(){
//         return(
//               <form class="search-form" action="results.html" method="get" onSubmit={(event)=>this.evitarSubmit(event)}>
//                 <input type="text" class="" name="searchData" placeholder="Buscar..." onChange={(event)=>this.controlarCambios(event)} value={this.state.valor}/>
//                 <button type="submit" class="btn btn-success btn-sm">Buscar</button>
//             </form>
//         )
//     }
// }

// export default Buscador