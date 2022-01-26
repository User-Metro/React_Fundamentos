//import './App.css';
import React, { Component, Fragment } from 'react';
// para usar esto debes de instalar lo siguiente: npm install react-router-dom
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Inicio from './temario/inicio.js'
import Hello from './temario/hello.js';
import Propiedades from './temario/props.js';
import Estado from './temario/state.js';
import Hook from './temario/hooks.js';
import HookState from './temario/hooks2.js';
import Formulario from './formulario/indexForm.js'

import './css/menu.css'

class App extends Component {

  render(){
    
    return <div className='contenedor'> 
      <Router>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/hello">Hola mundo</Link>
          <br />
          <Link to = "/props">Los Props</Link>
          <br />
          <Link to = "/state">States</Link>
          <br />
          <Link to = "/hooks">Hooks</Link>
          <br />
          <Link to = "/hookstate">Hooks v2</Link>
          <br />
          <Link to = "/form">Formularios</Link>
        </div>

        <Routes>
          <Route exact path="/" element={<Inicio />} />
          <Route exact path="/hello" element={<Hello />} />
          <Route exact path="/props" element={<Propiedades />} />
          <Route exact path="/state" element={<Estado />} />
          <Route exact path="/hooks" element={<Hook />} />
          <Route exact path="/hookstate" element={<HookState />} />
          <Route exact path="/form" element={<Formulario />} />
        </Routes>
      </Router> 
    </div>
  }
}

export default App;
