import React from 'react';
import './style.scss';
import chainsawImg from '../../assets/chainsaw.png'

const Menu = (props) => {
    const startGame = () => { 
        props.gameFunctions.isStartClicked();
    }



    return <>
    <div className="menu-card">
        <div className="container">
            <h1>I want to play a game</h1>
            <img className="saw" src={chainsawImg} alt="chainsaw doll"/>
        </div>
        <button onClick={startGame}>START GAME</button>
    </div>
    </>

}

export default Menu;