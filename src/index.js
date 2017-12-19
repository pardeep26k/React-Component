import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Clock from './components/Clock/Clock';
import Toggle from './components/Toggle/Toggle';
import Login from './components/Login/Login';
import ToDo from './components/ToDo/ToDo';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Signup from './components/Login/Signup';
import Search from './components/Search/Search';
import TicTac from './components/TicTac/TicTac';

import axios from 'axios';



import registerServiceWorker from './registerServiceWorker';

/*ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Clock />, document.getElementById('pk'));
ReactDOM.render(<Toggle />, document.getElementById('toggle'));
ReactDOM.render(<Signup />, document.getElementById('login'));
ReactDOM.render(<ToDo />, document.getElementById('todo'));
ReactDOM.render(<Form />, document.getElementById('form'));
ReactDOM.render(<Header />, document.getElementById('root'));*/
ReactDOM.render(<TicTac />, document.getElementById('tictac'));

axios.get('/data.json')
      .then((res) => {
       ReactDOM.render(<Search products={res.data} />, document.getElementById('search'));
      });
  


     
registerServiceWorker();
