import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import TogglePassWord from './components/TogglePassWord';
import ResetPassWord from './components/ResetPassWord';
import CelciusFarenheitCalculator from './components/CelciusFarenheitCalculator';
import './App.css';

class App extends Component {
	routes = () => {
		return (
			<Switch>
				<Route
					exact
					path={'/'}
					component={Home}
				/>
				<Route
					path={'/toggle-password'}
					component={TogglePassWord}
				/>
				<Route
					path={'/reset-password'}
					component={ResetPassWord}
				/>
				<Route
					path={'/celcius-farenheit-calculator'}
					component={CelciusFarenheitCalculator}
				/>
			</Switch>
		);
	};

  render() {
    return (
			<Router>
				<div className="app">
					<header className="app-header">
						<h1>App!</h1>
					</header>
					<main className="app-main">
						{this.routes()}
					</main>
				</div>
			</Router>
    );
  }
}

export default App;
