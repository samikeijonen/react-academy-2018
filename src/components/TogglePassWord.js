import React, { Component, Fragment } from 'react';

class TogglePassWord extends Component {
	constructor(props) {
		// Set checked state.
		super(props);
		this.state = {checked: ''};

		this.clickHandler = this.clickHandler.bind(this);
		this.submitHandler = this.submitHandler.bind(this);
	}

	/**
	 * Submit form handler.
	 *
	 * param {e} Object Event object.
	 */
	submitHandler = ( e ) => {
		console.log( e, e.currentTarget, this.state.checked );
		// Dont't reload the page.
		e.preventDefault();
	}

	/**
	 * Click form handler.
	 *
	 * param {e} Object Event object.
	 */
	clickHandler = ( e ) => {
		console.log( e, e.currentTarget );
		// Set checked state for true or false.
		this.setState({checked: e.currentTarget.checked});
	}

	render() {
		return(
			<Fragment>
				<h2>Toggle password visibility</h2>
				<form onSubmit={this.submitHandler}>
					<label htmlFor="username">Username</label>
					<input type="text" name="username" id="username" />

					<label htmlFor="password">Password</label>
					<input type={this.state.checked ? 'text' : 'password'} className="password" name="password" id="password" />

					<label className="no-bold" htmlFor="show-password">
						<input className="toggle-passwords" type="checkbox" name="show-password" id="show-password" onClick={this.clickHandler} />
						Show password
					</label>

					<button type="submit">Log In</button>
				</form>
			</Fragment>
		)
	}
}

export default TogglePassWord;
