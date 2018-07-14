import React, { Component } from 'react';

export default class Toggel extends Component 
{
	constructor(props) {
		super(props);
		this.state = {
			on:false
		};
		this.toggelButton = this.toggelButton.bind(this);
	}
	toggelButton(){
		this.setState({
			on:!this.state.on
		});
	}
	render()
	{
		const { render } = this.props;
		return (render({on:this.state.on, toggle:this.toggelButton}))
	}
}