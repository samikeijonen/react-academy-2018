import React, { Component, Fragment } from 'react';

class ResetPassWord extends Component {
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
				<h2>Change password</h2>
				<form onSubmit={this.submitHandler}>
					<label htmlFor="old-password">Old password</label>
					<input type={this.state.checked ? 'text' : 'password'} className="password" name="password" id="old-password" />

					<label htmlFor="new-password">New password</label>
					<input type={this.state.checked ? 'text' : 'password'} className="password" name="password" id="new-password" />

					<label className="no-bold" htmlFor="show-passwords">
						<input className="toggle-passwords" type="checkbox" name="show-password" id="show-passwords" onClick={this.clickHandler} />
						Show password
					</label>

					<button type="submit">Log In</button>
				</form>
			</Fragment>
		)
	}
}

export default ResetPassWord;
