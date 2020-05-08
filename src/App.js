import React from 'react';
import './App.css';

function Helloworld(props) {

  return(

//Esta funcion crea un div que imprime las propiedades de la etiqueta que esta llamando a esta funcion.
// A traves de PROPS: props es un sistema que permite llamar a una propiedad de una etiqueta.
  <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
  </div>
  );
} 


class Helloworld extends React.Component {
  // RECORDAR-------
  //    Puesto que estamos en una clase, debemos llamar a las funciones con THIS

//state: Define datos para el componente, que luego pueden ser utilizados como variables
//  La gracia del state, es que podmos utilizarlo para cambiar el estado del componente desde la interfaz, asignando un boton o algo.
//  ¿Como? React tiene una funcion que maneja estos cambios llamado setState, el cual se puede utilizar dentro de botones por ejemplo, para cambiar las "variables" del estado
  state = {
    show: true
  }


  toggleShow = () => { // La forma mas efectiva de crear una funcion que llamaremos EN UNA CLASE es con el tipo de funcion "funcion flecha"
  // A continuacion llamamos a la funcion setState que nos proporciona react para modificar el estado,
  // indicando cual es la variable que queremos modificar
    this.setState({show: !this.state.show})

  }

  render () {
//   Para acceder a las propiedades del estado debemos llamarlo de la siguiente forma
     if (this.state.show){ // Aqui decimos.. Si show dentro de state es true, entonces imprime este elemento
        return (

          <div id="hello">
            <h3>{this.props.subtitle}</h3>
            {this.props.mytext}
                       
            <button onClick={ this.toggleShow }>Cambiar el estado show</button>

          </div>
//          // EN EL BUTTON llamamos a la funcion que contiene el setState
        )
      } else {

        return  <h1>

          No hay elementos

          <button onClick={ this.toggleShow}>
            Volver a cambiar
          </button>

        </h1>
      }
  }
}
//-------------------------------- LOS SIGUIENTES TRES ELEMENTOS HACEN LO MISMO PERO ESCRITOS DE FORMA DISTINTA

 // Funcion Flecha
 const App = () => <div>Este es mi componente: <Helloworld/> </div>

 //CLase
 class App extends React.Component{
   render() {
     return <div>Este es mi componente: <Helloworld/> </div>
   }
 }

//FUncion simple
function App() {

  return (
// En la funcion App se pueden "instanciar" etiquetas HTML/JSX creadas anteriormente. En este caso utilizamos cosas similares a los parametros
// pero en este caso son propiedades de la etiqueta. Para luego llamarlas con props.
    <div>

      Este es mi componente: 
      <Helloworld mytext="Hello Tbs" subtitle="Weñaa cabres"/> 
      <Helloworld mytext="Hello Mi amor" subtitle="<3"/> 
      <Helloworld mytext="Kathy <3" subtitle="Te amo"/>

    </div>
  );
}

export default App;
