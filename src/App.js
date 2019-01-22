import React, { Component } from 'react';
import TogglePassWord from './components/TogglePassWord';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1>App!</h1>
        </header>
		<main className="app-main">
			<TogglePassWord />
		</main>
      </div>
    );
  }
}

export default App;
