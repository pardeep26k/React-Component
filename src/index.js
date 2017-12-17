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
ReactDOM.render(<Header />, document.getElementById('root'));
ReactDOM.render(<Search />, document.getElementById('container'));
*/
const Product=[
			  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
			  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
			  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
			  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
			  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
			  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'},
			  {category: 'Mechanic', price: '$999.99', stocked: false, name: 'Drill'},
			  {category: 'Mechanic', price: '$199.99', stocked: false, name: 'Jet'},
			  {category: 'Mechanic', price: '$109.99', stocked: true, name: 'Machine'}
			];
//ReactDOM.render(<Search products={Product} />, document.getElementById('search'));
ReactDOM.render(<TicTac />, document.getElementById('tictac'));


     
registerServiceWorker();
