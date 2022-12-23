import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';           // this line links the CSS file
// import App from './App';  // this line calls the App.js file

const element = <h1>Rendering is redirected</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);            // App.js is rendered by this line of code
root.render(element);