import React from 'react';
import './style.scss';

const Winner = (props) => {
    const startGame = () => { 
        props.gameFunctions.isStartClicked()
    }

    return <>
    <div className="menu-card">
        <div className="container">
            <h1>Winner winner chicken dinner!</h1>
            <img className="saw" src="./assets/chainsaw.png" alt="#"/>
        </div>
        <button onClick={startGame}>PLAY AGAIN</button>
    </div>
    <audio autoPlay>
        <source src="sound/applause.mp3" type="audio/mpeg"></source>
    </audio>
    </>

}

export default Winner;