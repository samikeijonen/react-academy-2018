import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
	render() {
		return(
			<Fragment>
				<h2>React tasks for fun</h2>
				<p>These are the same tasks as done in Vanilla JS. But turned into React.</p>
				<ul>
					<li><Link to="/toggle-password/">Toggle password</Link></li>
					<li><Link to="/reset-password/">Reset password</Link></li>
					<li><Link to="/celcius-farenheit-calculator/">Celcius to farenheit calculator</Link></li>
				</ul>
			</Fragment>
		)
	}
}

export default Home;
