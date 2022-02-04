import React, { Component } from 'react';

export default class Hello extends Component {

	render(){
	const HolaMundo = '¡Hola mundo!';
	const rootApp = document.getElementById('root');

	rootApp.innerHTML = `<h2>Este es mi primer, ${HolaMundo} con vanilla js </h2>`

		return (
      <div id="root"></div>
		)
	}
}
