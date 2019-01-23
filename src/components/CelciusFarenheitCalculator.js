import React, { Component, Fragment } from 'react';

class CelciusFarenheitCalculator extends Component {
	constructor( props ) {
		// Set data state.
		super(props);
		this.state = {
			farenheit: 32,
			celcius: 0
		};

		this.handleChange = this.handleChange.bind( this );
    	this.handleSubmit = this.handleSubmit.bind( this );
	}

	/**
	 * Convert Farenheits to Celcius.
	 *
	 * @return number
	 */
	farenheitToCelcius = function( temp ) {
		return Math.round( (temp - 32) * 5/9 );
	}

	/**
	 * Convert Celcius to Farenheits.
	 *
	 * @return number
	 */
	celciusToFarenheit = function( temp ) {
		return Math.round( (temp * 9/5) + 32 );
	}

	handleChange( event ) {
		console.log( event.target, event.target.name )
		const target = event.target;
    	const value  = target.value;
		const name   = target.name;

		// Set state for changes.
		this.setState({
			farenheit: name === 'celcius' ? this.celciusToFarenheit( value ) : value,
			celcius: name === 'farenheit' ? this.farenheitToCelcius( value ) : value,
		});
	}

	handleSubmit( event ) {
		console.log( 'Form submitted.' );
		event.preventDefault();
	}

	render() {
		return(
			<Fragment>
				<h2>Farenheit/Celcius Calculator</h2>
				<form className="grid grid--same-line" onChange={this.handleSubmit}>
					<div className="grid__wrapper">
						<input onChange={this.handleChange} type="number" name="farenheit" id="farenheit" value={this.state.farenheit} />
						<label htmlFor="farenheit">Farenheit</label>
					</div>

					<div className="grid__wrapper px-1x"><span className="font-big">=</span></div>

					<div className="grid__wrapper">
						<input onChange={this.handleChange} type="number" name="celcius" id="celcius" value={this.state.celcius} />
						<label htmlFor="celcius">Celcius</label>
					</div>
				</form>
			</Fragment>
		)
	}
}

export default CelciusFarenheitCalculator;
