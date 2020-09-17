import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';
import './index.css';
import HelloStudent from './components/HelloStudent';


ReactDOM.render(
  <React.StrictMode>

    <h1>React Git Branch Merge Practice</h1>
    <HelloWorld />

    
    <HelloStudent name="Preet" />

    <HelloStudent name="Ricki" />

    

  </React.StrictMode>,
  document.getElementById('root')
);


