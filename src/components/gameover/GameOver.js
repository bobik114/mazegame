import React from 'react';
import './style.scss';

const GameOver = (props) => {
    const startGame = () => { 
        props.gameFunctions.isStartClicked()
    }

    return <>
    <div className="menu-card">
        <div className="container">
            <h1>You have lost!</h1>
            <img className="saw" src="./assets/chainsaw.png" alt="#"/>
        </div>
        <button onClick={startGame}>PLAY AGAIN</button>
    </div>
    </>

}

export default GameOver;