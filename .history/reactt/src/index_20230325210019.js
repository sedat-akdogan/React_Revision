import React from 'react';
import './index.css';
import App from './App';
import { ReactDOM } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App /> );
