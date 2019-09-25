/* Componente que crea las tarjetas */
import React, { Component } from "react";
import './tarjeta.css';

export default class Tarjeta extends Component{
    
    render(){
        return (
                <div className="card text-center my-2">
                {/* columna de la tarjeta */}
                    <div className="card-header nombre font-weight-bold">
                        {this.props.dato.nombre}
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">
                            {this.props.dato.tel}
                        </h5>
                        <p className="card-text correo">
                            {this.props.dato.correo}
                        </p>
                        <a href="#" className="btn btn-danger">Borrar</a>
                    </div>
                </div>
        );
    }
}