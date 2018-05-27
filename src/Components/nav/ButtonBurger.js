import React, { Component } from 'react';
import './css/style.css';

export default class Button extends Component { 

    render() {
        return (
            <div onClick= {this.props.handleClick} className={this.props.condition ? 'wrapper-menu open' : 'wrapper-menu'}>
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
            </div>
        );
    }
}
