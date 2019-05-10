import React from 'react';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';

function App() {
  return (
    <div>
      <MuiThemeProvider>
        <Router>
          <Route path='/' exact component={Home} /> 
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
