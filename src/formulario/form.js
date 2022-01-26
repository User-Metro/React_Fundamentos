import React, { Component } from 'react';

export default class Form extends Component {

	//creando un estado
	state = {
		title: '',
		description: ''
	}

	//para evitar usar el metodo bind
	//si solo es un parametro no es necesario poner (event)
	onSubmit = event => {
		console.log(this.state)
		
		//resiviendo y mostrando los datos
		this.props.addTask(this.state.title, this.state.description);

		event.preventDefault(); //prevenir refrescar la página por defecto
	}

	//el nombre onChange puede ser cualquiera
	onChange = event => {
		//para ver en consola que ocurre
		console.log(event.target.name, event.target.value)
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	render(){
		//onChange para escuchar lo que esribe el usuario
		return (
			<form onSubmit={this.onSubmit}>
				<input type="text" 
					name='title'
					placeholder="Write a Task" 
					onChange={this.onChange} 
					value={this.state.title} />
				<br/>
				<textarea 
					placeholder="Write a description" 
					name="description"
					onChange={this.onChange} 
					value={this.state.description}></textarea>
				<br/>
				<input type="submit" />
			</form>
		)
	}
}
