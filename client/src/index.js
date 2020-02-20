import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './Components/Provider';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
    <ContextProvider>
        <Router>
            <App />
        </Router>
    </ContextProvider>,
document.getElementById('root'));