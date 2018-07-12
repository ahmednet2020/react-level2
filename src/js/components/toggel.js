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
		return (
			<div>
			{
				this.state.on && this.props.children
			}
				<button type="button" onClick={this.toggelButton} >hidden/show</button>	
			</div>
			)
	}
}