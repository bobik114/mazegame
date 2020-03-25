import React, {useState, useEffect} from 'react'
import useEventListener from '@use-it/event-listener'

const Player = () => {

    const [position, setPosition] = useState({
        xCurrent: 0,
        xPrevious: 0,
        yCurrent: 0,
        yPrevious: 0
    })
    const [attemptPosition, setAttemptPosition] = useState({
        xCurrent: position.xCurrent,
        xPrevious: position.xCurrent,
        yCurrent: position.yCurrent,
        yPrevious: position.yCurrent,
    })
    const [facing, setFacing] = useState(0)
    const [step, setStep] = useState(0)

    const playerSize = 77
    const direction = {
        down: 0,
        left: playerSize*1,
        right: playerSize*2,
        up: playerSize*3
    }

    useEffect(() => {
//animacja kroków--------------------------------------
    let stepInterval = setInterval(() => {
        if(step >= playerSize*8) {
            setStep(0)
        }
        setStep(step + 1*playerSize)
        if(step >= playerSize*8) {
            setStep(0)
            clearInterval(stepInterval)
        }
//-----------------------------------------------------
// próba zablokowania wychodzenia za mapę-------------
// lewa ściana
            if(attemptPosition.xCurrent >= 0) {
                setPosition({...position,
                    xCurrent: attemptPosition.xCurrent,
                })
            }
            if(attemptPosition.xCurrent < 0) {
                setAttemptPosition({...position,
                    xCurrent: position.xCurrent,
                })
            }
// górna ściana 
            if(attemptPosition.yCurrent >= 0) {
                setPosition({...position,
                    yCurrent: attemptPosition.yCurrent,
                })
            }
            if(attemptPosition.yCurrent < 0) {
                setAttemptPosition({...position,
                    yCurrent: position.yCurrent,
                })
            }
            
//------------------------------------------------------
    }, 80)
    return () => clearInterval(stepInterval)
    })
  

// Poruszanie się za pomocą strzałek, ustalanie nowej pozycji oraz kierunku facing

    useEventListener("keydown", ({ code }) => {
        console.log(code);
        if(code.indexOf("Arrow") === -1) return
        
        if(code==="ArrowRight") {
            setAttemptPosition(prevState => ({
                ...position,
                xCurrent: prevState.xCurrent+77,
                xPrevious: prevState.xCurrent
            }))
            setFacing(direction.right)
        }
        if(code==="ArrowLeft") {
            setAttemptPosition(prevState => ({
                ...position,
                xCurrent: prevState.xCurrent-77,
                xPrevious: prevState.xCurrent
            }))
            setFacing(direction.left)
        }
        if(code==="ArrowDown") {            
            setAttemptPosition(prevState => ({
                ...position,
                yCurrent: prevState.yCurrent+77,
                yPrevious: prevState.yCurrent
            }))
            setFacing(direction.down)
        }
        if(code==="ArrowUp") {
            setAttemptPosition(prevState => ({
                ...position,
                yCurrent: prevState.yCurrent-77,
                yPrevious: prevState.yCurrent
            }))
            setFacing(direction.up)
        }
    })
//--------------------

    return <>
    <div id="player" style={{
        position: "relative",
        width: 77,
        height: 77,
        left: position.xCurrent,
        top: position.yCurrent,
        background: `url(assets/player.png) -${step}px -${facing}px`
    }}></div>
    </>
}

export default Player