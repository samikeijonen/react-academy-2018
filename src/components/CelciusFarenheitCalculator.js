import React, { Component, Fragment } from 'react';

class CelciusFarenheitCalculator extends Component {
	//constructor(props) {
		// Set checked state.
		// super(props);
		// this.state = {checked: ''};

		// this.clickHandler = this.clickHandler.bind(this);
		// this.submitHandler = this.submitHandler.bind(this);
	//}

	render() {
		return(
			<Fragment>
				<h2>Farenheit/Celcius Calculator</h2>
				<form className="grid grid--same-line">
					<div className="grid__wrapper">
						<input type="number" name="farenheit" id="farenheit" value="32" />
						<label htmlFor="farenheit">Farenheit</label>
					</div>

					<div className="grid__wrapper px-1x"><span className="font-big">=</span></div>

					<div className="grid__wrapper">
						<input type="number" name="celcius" id="celcius" value="0" />
						<label htmlFor="celcius">Celcius</label>
					</div>
				</form>
			</Fragment>
		)
	}
}

export default CelciusFarenheitCalculator;
