//desde biblioteca de React importamos las caracteristicas de los componentes
import React, { Component } from "react";
//importando el componente formulario
import Formulario from "./form.js";
//importamos el API local que hemos creado
import api from "./apiForm.json";
//importamos el modulo del formulario
import Modulo from "./module.js";

//con esto indicamos que herede las caracteristicas de Component
class indexForm extends Component {
  //se crea una aplicacion con un estado que contiene tareas
  state = {
    datos: api,
  };

  //esta función espera los siguientes datos:
  addTask = (title, description) => {
    //guardamos los datos en una constante
    const newTask = {
      title: title,
      description: description,
      id: this.state.datos.length,
    };
    this.setState({
      datos: [...this.state.datos, newTask],
    });
  };

  deleteTask = (id) => {
    const ReDelete = this.state.datos.filter((datos) => datos.id !== id);
    this.setState({ datos: ReDelete });
  };

  checkDone = (id) => {
    const updateTask = this.state.datos.map((datos) => {
      if (datos.id === id) {
        datos.done = !datos.done;
      }
      return datos;
    });
    this.setState({ datos: updateTask });
  };

  //con render visualizamos las tareas de un componente
  render() {
    //pasamos las tareas(datos)/función que tengo al siguiente componente
    //excat para indicar que tiene que ser la ruta exacta para visualizar el contenido
    return <div className="content">
        <Formulario addTask={this.addTask} />
        <Modulo
          datos={this.state.datos}
          deleteTask={this.deleteTask}
          checkDone={this.checkDone}
        />
      </div>
    
  }
}

export default indexForm;
