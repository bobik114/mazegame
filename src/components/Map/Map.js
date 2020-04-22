import React, {useState, useEffect} from 'react'
import './style.scss'
import Player from '../Player/Player'

import grass from '../../assets/grass.png'
import wall from '../../assets/wall.png'
import spikes from '../../assets/spikes.png'
import ladder from '../../assets/ladder.png'
import hiddenSpikes from '../../assets/hiddenSpikes.png'
import soundMusic from '../../sound/music.ogg'


let lvlIndex = 0
let spikesInterval

const Map = (props) => {

    const mapBase = [
        [
            [ 0, 1, 0, 2, 0, 0, 0, 1, 1, 1, 0, 1, 0, 2, 0 ],
            [ 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 2, 0 ],
            [ 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
            [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 1, 0, 1, 0 ],
            [ 2, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 2 ],
            [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 2 ],
            [ 2, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
            [ 2, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
            [ 1, 1, 1, 1, 0, 2, 2, 0, 1, 0, 0, 1, 1, 1, 3 ],
        ],
        [
            [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
            [ 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1 ],
            [ 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
            [ 0, 1, 0, 1, 3, 0, 2, 0, 2, 0, 0, 1, 0, 1, 1 ],
            [ 0, 1, 0, 1, 0, 2, 0, 2, 0, 2, 0, 1, 0, 1, 1 ],
            [ 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1 ],
            [ 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 1 ],
            [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
            [ 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1, 1 ],
            [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        ],
        [
            [ 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 3 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
            [ 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0, 1, 0, 2, 0 ],
        ],
        [
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        ]
    ]

    const [level, setLevel] = useState(mapBase[0])
    const [timer, setTimer] = useState(25)
    const [isSpikes, setIsSpikes] = useState(true)
    
    useEffect(() => {

        clearInterval(spikesInterval)

        if(lvlIndex === 3) {                       
            props.gameFunctions.isWinner()
            lvlIndex = 0
        }

        if(timer<1) {                               
            props.gameFunctions.isDead()
            lvlIndex = 0
        }
        
        spikesInterval = setInterval(() => {      

            if(isSpikes === true) {
                setIsSpikes(false)
                setLevel(level.map((row, i) => row.map((data, j) => {return data === 2 ? 4 : data})))
                
            }
            else if(isSpikes === false) {
                setIsSpikes(true)
                setLevel(level.map((row, i) => row.map((data, j) => {return data === 4 ? 2 : data})))
            }
        }, 1000)
    }, [level])

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevState => prevState - 1)
        }, 1000)
    
    }, [])

    const levelWon = () => {
        lvlIndex++
        setLevel(mapBase[lvlIndex])
        setTimer(25)
    }

    const killed = () => {
        lvlIndex=0
    }

    const getMapEl = (type) => {
        switch (type) {
        case 0:
            return grass
        case 1:
            return wall
        case 2:
            return spikes
        case 3:
            return ladder
        case 4:
            return hiddenSpikes
        default:
            return grass
        }
    }
    
    return <>
        <table style={{
            position: "relative",
            margin: "51px auto",
            width: "1155px",
            height: "770px",
            backgroundColor: "green",
            
        }} >
            <tbody>
                {level.map((mapRow, i) => <tr key={i}>{mapRow.map((mapEl, i) => <td key={i}><img alt="#" src={getMapEl(mapEl)} /></td>)}</tr>)}
            
                <tr><td><div className="timer">{timer}</div></td></tr>
                <tr><td><Player killed={killed} levelWon={levelWon} mapBase={level} gameFunctions={props.gameFunctions}/></td></tr>
            </tbody>                
        </table>
        <audio autoPlay>
                <source src={soundMusic} type="audio/ogg"></source>
        </audio>
    </>
}

export default Map