import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './main.css';


var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

ReactDOM.render(<App movies={movies}/>, document.getElementById('app'));
