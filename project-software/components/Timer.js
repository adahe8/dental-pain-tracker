import { useState, useEffect } from 'react';

import { Button } from "@chakra-ui/react";

function Timer() {
    const [time, setTime] = useState(0)
    const [timerOn, setTimerOn] = useState(true)

    useEffect(() => {
        let interval = null;
        if(timerOn) {
            interval = setInterval(() => {
                setTime(prevTime => prevTime + 10)
            }, 10)
        }else{
            clearInterval(interval)
        }
        return () => clearInterval(interval)

      }, [timerOn])

    return (
        <div className="timer">
            <div>
                <div className="row">
                <h3>Time Elapsed</h3>
                <span>{("0" + Math.floor((time/3600000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/60000) % 60)).slice(-2)}:</span>
                <span>{("0" + Math.floor((time/1000) % 60)).slice(-2)}</span>
                </div>
            </div>
            <div>
                {timerOn && (
                    <Button bg="blue.50" onClick={() => setTimerOn(false)}> Stop </Button>
                )}
                {!timerOn && time!==0 && (
                    <Button bg="blue.50" onClick={() => setTimerOn(true)}> Resume </Button>
                )}
                {!timerOn && time > 0 && (
                    <Button bg="blue.50" onClick={() => setTime(0)}> Reset </Button>
                )}
            </div>
           
        </div>
    )
}

export default Timer;