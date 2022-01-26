//creando un nuevo componente
import React, { Component } from 'react';
import FormControl from './formControl.js';
import propTypes from 'prop-types';

class Module extends Component {
	render(){
		//este componente mapea los datos que resive y me muestra una unica tarea por cada recorrido
		return this.props.datos.map(datos => 
			<FormControl 
				datos={datos} 
				key={datos.id} 
				deleteTask={this.props.deleteTask}
				checkDone={this.props.checkDone} 
			/>);
	}
}

Module.propTypes = {
	datos: propTypes.array.isRequired
}

export default Module;