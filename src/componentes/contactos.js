/* Componente que contiene a las tarjetas */
import React,{ Component } from "react";
import Tarjeta from './tarjeta'; /* Tarjetas, que va a usar éste componente*/

export default class Contactos extends Component{    
    render(){
        const tarjetas = this.props.datos.map((elemento,i) => {
            return(
                    <div className="col-xl-4 col-lg-6" key={i}>
                        <Tarjeta dato = {elemento} ></Tarjeta>
                    </div>
            );
        });
     
        return (
                <div className="row">{tarjetas}</div>
                
        );
    }
}