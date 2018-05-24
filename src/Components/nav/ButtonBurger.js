import React, { Component } from 'react';
import './css/style.css';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: null
        };
    }

    handleClick() {
        this.setState({
            condition: !this.state.condition
        })
    }

    render() {
        return (
            <div onClick={() => this.handleClick()} className={this.state.condition ? 'wrapper-menu open' : 'wrapper-menu'}>
                <div className="line-menu half start"></div>
                <div className="line-menu"></div>
                <div className="line-menu half end"></div>
            </div>
        );
    }
}
