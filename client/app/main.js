import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
	<MuiThemeProvider>
    	<AppComponent />
  	</MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('todo-wrapper'));