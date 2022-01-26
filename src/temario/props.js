import React, { Component, Fragment } from "react";

//con props le pasamos una propiedad
//con {props.mytext} invocamos la propiedad
function Helloworld(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  );
}

//este es el mismo metodo que la function App
const Appi = () => (
  <div>
    This is my component:
    <Helloworld mytext="Hello world!" subtitle="algo" />
    <Helloworld mytext="Hola mundo" subtitle="componente 2" />
    <Helloworld mytext="Hello!" />
  </div>
);

export default Appi;
