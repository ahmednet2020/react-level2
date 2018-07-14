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
				<Toggel render={({on,toggle})=>(
					<div>
						{on && <h2>show hello world</h2>}
						<button type="button" onClick={toggle}>show/hidden</button>
					</div>
					)}/>
			</div>
		)
	}
}

//render jsx
ReactDOM.render(<App />, document.getElementById('app'));