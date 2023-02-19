import { useRouter } from "next/router";
import { useMutation } from "../convex/_generated/react";
import { useQuery } from "../convex/_generated/react";

// import Timer from "../components/Timer";
import ImageDrop from "../components/ImageDrop";

import React, { useState, useEffect } from "react";

import { Heading } from "@chakra-ui/react";

export default function Session(props) {
  const createSession = useMutation("createSession");
  const createSessionWithData = (data) => createSession(data);
  //   const createUser = (data) => createSession(data);
  const [numbers, setNumbers] = useState([0]);
  const [average, setAverage] = useState([0]);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);

  useEffect(() => {
    let interval = null;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  useEffect(() => {
    let intervalId;
    const handleKeyPress = (event) => {
      const { key } = event;
      if (key >= "0" && key <= "4") {
        const newNumber = parseInt(key);
        setNumbers((prevNumbers) => [...prevNumbers, newNumber]);
      }
    };
    document.addEventListener("keypress", handleKeyPress);

    intervalId = setTimeout(() => {
      if (numbers.length > 0) {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const newAverage = sum / numbers.length;
        setAverage(newAverage.toFixed(2));
      }
    }, 1000);

    return () => {
      document.removeEventListener("keypress", handleKeyPress);
      clearTimeout(intervalId);
    };
  }, [numbers, average]);

  const router = useRouter();
  let { userId } = router.query;
  let user = useQuery("getUser", userId);
  user = JSON.stringify(user);
//   console.log(user);

  const handleEndSessionClick = (e) => {
    e.preventDefault();

    const session = {
      userId: userId,
      date: Date.now(),
      averagePain: average,
      time: time,
    };

    const tempUser = {
      name: "Test",
      sessionTime: 60,
      // userId: new Id("users", ...)
      averagePain: 4,
    };

    const id = createSessionWithData(session);

    router.push("./sessionSummary");
  };

  return (
    <div>
      <h2> Patient Updates </h2>
      {/* <Timer /> */}
      <div className="timer">
        <div>
          <div className="row">
            <h3>Time Elapsed</h3>
            <span>{("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
          </div>
        </div>
        <div>
          {timerOn && <button onClick={() => setTimerOn(false)}> Stop </button>}
          {!timerOn && time !== 0 && (
            <button onClick={() => setTimerOn(true)}> Resume </button>
          )}
          {!timerOn && time > 0 && (
            <button onClick={() => setTime(0)}> Reset </button>
          )}
        </div>
      </div>
      <ImageDrop />
      <button className="endSession" onClick={handleEndSessionClick}>
        {" "}
        End Session{" "}
      </button>
      <Heading as="h5">
        {/* Average Pain Measurement: {avgs[avgs.length - 1]} */}
        Average: {average}
      </Heading>
    </div>
  );
}
