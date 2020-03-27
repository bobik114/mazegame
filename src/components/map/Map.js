import React, {useState, useEffect} from 'react';
import './style.scss';

import Player from '../player/Player'

let lvlIndex = 0;

const Map = (props) => {

    const mapBase = [
        [
        [ 0, 1, 0, 0, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 3, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 4, 0, 3, 0, 0, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0 ],
       ],
       [
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 3, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 4, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 4 ],
       ],
       [
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 1, 4, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 1, 0, 1, 3, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0 ],
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
    
    const spikesLevel = level;
    const noSpikesLevel = level.map((row, i) => row.map((data, j) => {return data === 3 ? 6 : data}));

    useEffect(() => {

        if(lvlIndex === 3) {
            props.gameFunctions.isWinner();
            lvlIndex = 0;
        }

        const spikesInterval = setInterval(() => {      //interwal pojawiania się i znikania kolców

            if(level == noSpikesLevel) {
                setLevel([...spikesLevel])
            }
            else if(level == spikesLevel) {
                setLevel([...noSpikesLevel])
            }

            console.log("nospikes: ", noSpikesLevel);
            console.log("spikes: ", spikesLevel);
            console.log("level state", level);
        }, 2000)

        

    }, [])

    const levelWon = () => {
        lvlIndex++;
        setLevel(mapBase[lvlIndex]);
    }

    const getMapEl = (type) => {
        switch (type) {
        case 0:
            return "./assets/grass.png";
        case 1:
            return "./assets/wall.png";
        case 2:
            return "./assets/rock.png";
        case 3:
            return "./assets/spikes.png";
        case 4:
            return "./assets/ladder.png";
        case 6:
            return "./assets/grass.png";
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
            <Player levelWon={levelWon} mapBase={level} gameFunctions={props.gameFunctions}/>
        </table>
        
    </>
}

export default Map