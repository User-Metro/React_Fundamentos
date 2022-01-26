import React, { Component, Fragment } from 'react';

//creando estados
//state almacea datos del componente helloworld
class HelloworldId extends React.Component {
  state = {
    show: true,
  };

  //creando un metodo
  //utilizamos = () => para evitar vincular este metodo con .bind(this)
  //ya que es necesario vincular el onclick con nuestro metodo para que funcione

  toggleShow = () => {
    //agregando "!" le indicamos que si el estado activo es true, se cambie a false y si es false, de cambie a true
    this.setState({ show: !this.state.show });
  };

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </div>
      );
    } else {
      return (
        <h1>
          {" "}
          No hay elementos
          <button onClick={this.toggleShow}>Cambiar estado</button>
        </h1>
      );
    }
  }
}

//

function Estado() {
  return (
    <div>
      This is my component:
      <HelloworldId mytext="Hello fast" subtitle="loremp ispum" />
      <HelloworldId mytext="Hola mundo" subtitle="componente 2" />
      <HelloworldId mytext="Hello!" />
    </div>
  );
}

export default Estado;
