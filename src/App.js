import React, {useState} from 'react'
import './scss/main.scss'

import Map from './components/Map/Map'
import Menu from './components/Menu/Menu'
import GameOver from './components/GameOver/GameOver'
import Winner from './components/Winner/Winner'

const App = () => {
  const [startMenu, setStartMenu] = useState(true)
  const [playGame, setPlayGame] = useState(true)
  const [gameOver, setGameOver] = useState(false)
  const [winner, setWinner] = useState(false)

  const gameFunctions = {
    isDead: function() {
      setGameOver(true)
      setPlayGame(false)
    },
    isWinner: function() {
      setWinner(true)
      setPlayGame(false)
    },
    isStartClicked: function() {
      setStartMenu(false)
      setPlayGame(true)
      setGameOver(false)
    }
  }

  if(startMenu===true) {
    return <Menu gameFunctions={gameFunctions}/>
  }
  else if(gameOver===true) {
    return <GameOver gameFunctions={gameFunctions}/>
  }
  else if(playGame===true) {
    return <Map gameFunctions={gameFunctions}/>
  }
  else if(winner===true) {
    return <Winner gameFunctions={gameFunctions}/>
  }
}

export default App
