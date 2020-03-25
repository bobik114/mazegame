import React from 'react'

import Player from '../player/Player'

const Map = () => {

    const mapBase = [
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
    ]

    const getMapEl = (type) => {
        switch (type) {
        case 0:
            return "./assets/grass.png";
        case 1:
            return "./assets/wall.png";
        case 2:
            return "./assets/tree.png";
        default:
            return "./assets/grass.png";
        }
    };
    
    return <>
        <table style={{
            position: "relative",
            margin: "50px auto",
            width: "1155px",
            height: "770px",
            backgroundColor: "green",
            border: "solid 4px yellow"
        }} >
        {mapBase.map((mapRow, i) => <tr key={i}>{mapRow.map((mapEl, i) => <td key={i}><img alt="#" src={getMapEl(mapEl)} /></td>)}</tr>)}
            <Player mapBase={mapBase}/>
        </table>
        
    </>
}

export default Map