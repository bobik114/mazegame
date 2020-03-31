import React, {useState, useEffect} from 'react';
import './style.scss';

import Player from '../player/Player'

let lvlIndex = 0;
let spikesInterval;

const Map = (props) => {

    const mapBase = [
        [
        [ 0, 1, 0, 3, 0, 0, 0, 1, 1, 1, 0, 1, 0, 3, 0 ],
        [ 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 3, 0 ],
        [ 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 0, 1, 0, 0, 3, 0, 1, 0, 1, 0 ],
        [ 3, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 3 ],
        [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 3 ],
        [ 3, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 3, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 1, 1, 0, 3, 3, 0, 1, 0, 0, 1, 1, 1, 4 ],
       ],
       [
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
        [ 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1 ],
        [ 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
        [ 0, 1, 0, 1, 4, 0, 3, 0, 3, 0, 0, 1, 0, 1, 1 ],
        [ 0, 1, 0, 1, 0, 3, 0, 3, 0, 3, 0, 1, 0, 1, 1 ],
        [ 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1 ],
        [ 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 1, 1 ],
        [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1 ],
        [ 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1 ],
        [ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ],
       ],
       [
        [ 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 4 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0, 1, 0, 3, 0 ],
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
    ]];

    const [level, setLevel] = useState(mapBase[0]);
    const [timer, setTimer] = useState(25);
    const [isSpikes, setIsSpikes] = useState(true);
    
    useEffect(() => {

        clearInterval(spikesInterval)

        if(lvlIndex === 3) {                       
            props.gameFunctions.isWinner();
            lvlIndex = 0;
        }

        if(timer<1) {                               
            props.gameFunctions.isDead();
            lvlIndex = 0;
        }
        
        spikesInterval = setInterval(() => {      

            if(isSpikes === true) {
                setIsSpikes(false)
                setLevel(level.map((row, i) => row.map((data, j) => {return data === 3 ? 6 : data})))
                
            }
            else if(isSpikes === false) {
                setIsSpikes(true)
                setLevel(level.map((row, i) => row.map((data, j) => {return data === 6 ? 3 : data})))
            }
        }, 1000)
    }, [level])

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimer(prevState => prevState - 1);
        }, 1000)
    
    }, [])

    const levelWon = () => {
        lvlIndex++;
        setLevel(mapBase[lvlIndex]);
        setTimer(25);
    }

    const killed = () => {
        lvlIndex=0;
    }

    const getMapEl = (type) => {
        switch (type) {
        case 0:
            return "./assets/grass.png";
        case 1:
            return "./assets/wall.png";
        case 2:
            return "./assets/wall2.png";
        case 3:
            return "./assets/spikes.png";
        case 4:
            return "./assets/ladder.png";
        case 6:
            return "./assets/hiddenSpikes.png";
        default:
            return "./assets/grass.png";
        }
    };
    
    return <>
        <table style={{
            position: "relative",
            margin: "51px auto",
            width: "1155px",
            height: "770px",
            backgroundColor: "green",
            
        }} >
        {level.map((mapRow, i) => <tr key={i}>{mapRow.map((mapEl, i) => <td key={i}><img alt="#" src={getMapEl(mapEl)} /></td>)}</tr>)}
            <div className="timer">{timer}</div>
            <Player killed={killed} levelWon={levelWon} mapBase={level} gameFunctions={props.gameFunctions}/>
        </table>
        <audio autoPlay>
                <source src="sound/music.ogg" type="audio/ogg"></source>
        </audio>
    </>
}

export default Map;