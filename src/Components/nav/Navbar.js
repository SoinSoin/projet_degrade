import React, { Component } from 'react';
import Button from './ButtonBurger';
import './css/style.css';
// import * as Semantic from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.css';

// var wrapperMenu = document.querySelector('.wrapper-menu');
// ReactDOM.wrapperMenu.addEventListener('click', function () {
//   wrapperMenu.classList.toggle('open');
// })
export default class Navbar extends Component {

  render() {
    return (
      <nav >
        <Button/>
      </nav>
    );
  }
}