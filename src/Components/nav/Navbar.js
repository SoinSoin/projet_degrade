import React, { Component } from 'react';
import Toolbar from './Toolbar';
import './css/style.css';
// import * as Semantic from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav >
        <Toolbar />
      </nav>
    );
  }
}