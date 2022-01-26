// importamos useState, el hook para crear un state en nuestro componente
import React, { useState } from "react";

function ContadorState() {
  // useState recibe un parámetro: el valor inicial del estado (que será 0)
  // y devuelve un array de dos posiciones:
  //  la primera (count), tiene el valor del estado
  //  la segunda (setCount), el método para actualizar el estado
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Usando hooks con useState</h1>
      <p>Has hecho click {count} veces</p>
      {
        //actualizamos el state al hacer click con setCount }
        <button onClick={() => setCount(count + 1)}>Haz click!</button>
      }
    </div>
  );
}

export default ContadorState;