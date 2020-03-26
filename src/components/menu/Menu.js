import React from 'react';
import './style.scss';
import { Button } from 'react-bootstrap';

const Menu = (props) => {
    const startGame = () => { 
        props.isStarted()
    }



    return <>
    <div className="menu-card">
        <div className="container">
            <h1>I want to play a game</h1>
            <img className="saw" src="./assets/chainsaw.png" alt="#"/>
        </div>
        <button onClick={startGame}>START GAME</button>
    </div>
    </>

}

export default Menu;