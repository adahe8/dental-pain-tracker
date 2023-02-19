import { useState, useEffect } from 'react';

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
                    <button onClick={() => setTimerOn(false)}> Stop </button>
                )}
                {!timerOn && time!==0 && (
                    <button onClick={() => setTimerOn(true)}> Resume </button>
                )}
                {!timerOn && time > 0 && (
                    <button onClick={() => setTime(0)}> Reset </button>
                )}
            </div>
           
        </div>
    )
}

export default Timer;