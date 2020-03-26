import React, {useState} from 'react'
import './style.scss';

import Player from '../player/Player'

const Map = (props) => {

    const mapBase = {
        level1: [
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
       level2: [
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 4, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 4 ],
       ],
       level3: [
        [ 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0 ],
        [ 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0 ],
        [ 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0 ],
        [ 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0 ],
        [ 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0 ],
        [ 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0 ],
       ],
    };

    const [level, setLevel] = useState(mapBase.level1);

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
            return "./assets/exit.png"
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
            <Player gameOver={props.gameOver} mapBase={level}/>
        </table>
        
    </>
}

export default Map