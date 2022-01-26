import React, { Component } from "react";
//recuerda que para usar esto debes instalar:  npm install --save prop-types
import propTypes from "prop-types";
import "./styles.css";

class FormControl extends Component {
  //aplicando estilos con funciones
  StyleCompleted() {
    return {
      fontSize: "20px",
      border: "8px solid blue",
      width: "60%",
      //condicional de si es true se cambie el color a gray, si es false a red
      color: this.props.datos.done ? "gray" : "red",
      textDecoration: this.props.datos.done ? "line-through" : "none",
    };
  }

  render() {
    //desde este objeto extraeme los datos de "formModule"
    const { datos } = this.props;

    //esa unica tarea toma los datos y los imprime en un div
    return (
      <div style={this.StyleCompleted()}>
        <div className="black">
          <div className="data">
            {datos.title} -{datos.description} -{datos.done} -{datos.id}
          </div>
          <div className="options">
            <input
              type="checkbox"
              onChange={this.props.checkDone.bind(this, datos.id)}
            />
            <button
              style={btnDelete}
              onClick={this.props.deleteTask.bind(this, datos.id)}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//indicar que el dato que esperas es un objeto
FormControl.propTypes = {
  datos: propTypes.object.isRequired,
};

//otra forma de aplicar estilos css con objetos
const btnDelete = {
  fontSize: "18px",
  background: "#ea2027",
  color: "#fff",
  border: "none",
  padding: "10px 15px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default FormControl;
