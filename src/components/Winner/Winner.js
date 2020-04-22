import React from 'react'
import './style.scss'
import chainsawImg from '../../assets/chainsaw.png'
import soundApplause from '../../sound/applause.mp3'

const Winner = (props) => {
    const startGame = () => { 
        props.gameFunctions.isStartClicked()
    }

    return <>
    <div className="menu-card">
        <div className="container">
            <h1>Winner winner chicken dinner!</h1>
            <img className="saw" src={chainsawImg} alt="chainsaw doll"/>
        </div>
        <button onClick={startGame}>PLAY AGAIN</button>
    </div>
    <audio autoPlay>
        <source src={soundApplause} type="audio/mpeg"></source>
    </audio>
    </>

}

export default Winner