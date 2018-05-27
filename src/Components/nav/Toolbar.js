import React, { Component } from 'react';
import './css/style.css';
import Button from './ButtonBurger';
import Anime from 'react-anime'

const MyToolbar = ({ condition, handleClick }) => {
    // console.log(condition)
    if (condition === false)
        return (
            <div onClick={handleClick} className="Toolbar pulse">
                <Button handleClick={handleClick} condition={condition} />
                <div className="menu"/>
            </div>
        )


    return (
        <div onClick={handleClick} className="Toolbar">
            <Button handleClick={handleClick} condition={condition} />
            <Anime easing="easeInOutExpo"
                duration={650}
                translateX='15em'
                translateY='100vh'
                scale={[1, 1]}>
                <div className="menu"/>
            </Anime>
        </div>
    )

}


export default class Toolbar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            condition: false
        };
    }

    handleClick() {
        this.setState({
            condition: !this.state.condition
        })
    }
    render() {
        return (
            <MyToolbar handleClick={this.handleClick} condition={this.state.condition}></MyToolbar>
        )

    }

}