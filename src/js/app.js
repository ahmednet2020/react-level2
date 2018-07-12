import 'babel-polyfill';
import 'raf/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
//import compponents
import Toggel from './components/toggel';
//app class

class App extends React.Component
{
	render()
	{
		return (
			<div>
				<Toggel>
					<p>hi iam show now can you see me</p>
				</Toggel>
			</div>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));