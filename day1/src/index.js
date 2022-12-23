import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';           // this line links the CSS file
// import App from './App';  // this line calls the App.js file

// const element = <h1>Rendering is redirected</h1>   // we can turn this element into a function:

const App = () => {              //  if we want to create a component; we must make the fisrt letter Capital: const Element !!
  return (
     // we need to have an empty folder-like design if we are going to have morethen one element.
    <>                                                                           
      <h1> the element is a function now!! </h1>
      <p>This is an arrow function</p>
      <Child />
    </>
  );
};

const Child = () => <p>I am a child element</p>;

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App/>);            // App.js is rendered by this line of code
// root.render(element);          // element is just a simple element. 
root.render(<App />);          // element() is a function now.         // calling a component: root.render(<Element />);
