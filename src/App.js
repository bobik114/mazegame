import React from 'react';
import {useState} from 'react';


import Map from './components/map/Map';
import Menu from './components/menu/Menu';

const App = () => {
  const [startMenu, setStartMenu] = useState(true);
  const [playGame, setPlayGame] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(false);

  const isStartClicked = () => {
    setStartMenu(false);
    setPlayGame(true);
  }

  const gameFunctions = {
    isDead: function() {
      setStartMenu(true);
      setPlayGame(false);
    },
    isWinner: function() {
      setWinner(true);
      setPlayGame(false);
    }
  }

  if(startMenu===true) {
    return <Menu isStarted={isStartClicked}/>
  }
  else if(playGame===true) {
    return <Map gameOver={gameFunctions.isDead}/>
  }
  

}

export default App;
