import React, {Component}from 'react';
import './App.css';

/* Componentes */
import Navegacion from './componentes/nav'; /* Componente del menú superior */
import Captura from './componentes/captura'; /* Componente de la columna de captura */
import Contactos from './componentes/contactos'; /* Componente que contiene las tarjetas */

/* Datos dummies */
import {ejemplos} from './ejemplo.json';

export default class App extends Component{
  constructor(){
    super();
    this.state = {ejemplos}
  }
  render(){
    return (
      <div className="App">
        <Navegacion></Navegacion>
         <div className="container-fluid">
           {/* cuerpo de la página */}
           <div className="row">
              {/* fila principal para continuar con el esquema de bootstrap */}
              <div className="col-md-4 border-right">
                {/* columna de la parte de captura */}
                <Captura></Captura>
              </div>
              <div className="col-md-8">
                {/* Columna que sirve para presentar las tarjetas*/}
                  <Contactos datos = {this.state.ejemplos} ></Contactos>
              </div>
           </div>
         </div>
      </div>
    );
  }
}
