import { useState } from 'react';

function Timer({onOff, timerOn}) {
    const [time, setTime] = useState(onOff)
    const [timerOn, setTimerOn] = useState(timerOn)

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
            <div>{time}</div>
            <div>
                <button onClick={() => setTimerOn(true)}> Start </button>
                <button onClick={() => setTimerOn(false)}> Stop </button>
                <button onClick={() => setTimerOn(true)}> Resume </button>
                <button onClick={() => setTime(0)}> Reset </button>
            </div>
        </div>
    )
}

export default Timer;