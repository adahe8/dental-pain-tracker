import { useRouter } from "next/router";
import { useMutation } from "../convex/_generated/react";
import { useQuery } from "../convex/_generated/react";

// import Timer from "../components/Timer";
import ImageDrop from "../components/ImageDrop";

import React, { useState, useEffect } from "react";

import { Select, Button, Box, Grid, GridItem, Heading } from "@chakra-ui/react";

import Image from "next/image";

import { DateTime } from "luxon";

export default function Session(props) {
  const createSession = useMutation("createSession");
  const createSessionWithData = (data) => createSession(data);
  //   const createUser = (data) => createSession(data);
  const [numbers, setNumbers] = useState([0]);
  const [average, setAverage] = useState([0]);

  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(true);

  const resetTimer = () => {
      setTime(0); 
      setTimerOn(true);
  }

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

    const now = DateTime.now();
    const niceString = now.toFormat("yyyy-MM-dd");

    const session = {
      userId: userId,
      date: niceString,
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

  //   return (

  //     <div>
  //       <h2> Patient Updates </h2>
  //       <Timer />
  //       <ImageDrop />
  //       <button className="endSession" onClick={handleEndSessionClick}>
  //         {" "}
  //         End Session{" "}
  //       </button>
  //       <Heading as="h5">
  //         {/* Average Pain Measurement: {avgs[avgs.length - 1]} */}
  //         Average: {average}
  //       </Heading>
  //     </div>
  //   );

  return (
    <Box
      h="100%"
      w="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      bg="blue.50"
    >
      <Box
        bg="blue.50"
        w="100%"
        h="200px"
        color="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
      >
        <Grid
          templateColumns="40% 60%"
          templateRows="50% 50%"
          alignItems="center"
          height="200px"
          width="90%"
          columnGap={8}
        >
          <GridItem w="100%" display="flex" justifyContent="end">
            <Image
              src="/images/teeth_svgrepo.com.svg" // Route of the image file
              height={100} // Desired size with correct aspect ratio
              width={100} // Desired size with correct aspect ratio
              alt="logo"
            />
          </GridItem>
          <GridItem w="100%">
            <Heading as="h1" fontSize="50px">
              Denteels
            </Heading>
          </GridItem>
          <GridItem w="100%" colStart={1} colEnd={-1}>
            <Heading as="h1" fontSize="22px" pl="8px" pr="8px">
              A monitor for your patient's oral comfort, to ensure your dental
              practice puts them first.
            </Heading>
          </GridItem>
        </Grid>
      </Box>
      <Box
        h="calc(100vh - 180px)"
        w="90%"
        bg="bblue.50"
        pb="50px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        rowGap="70px"
      >
        <Grid templateRows="100px 250px" w="500px" h="400px" gap={6} bg="white">
          <GridItem
            w="100%"
            bg="green.50"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl="10px"
          >
            <Heading as="h3" fontSize="30px" color="white">
              Today's Session
            </Heading>
          </GridItem>
          <GridItem w="100%">
            <Grid h="100%" templateRows="repeat(4, 1fr)" gap={8} pl="20px">
              <GridItem w="100%">
                <Heading as="h3" fontSize="20px">
                  Average Pain Indicated: {average}
                </Heading>
              </GridItem>
              <GridItem w="100%">
                <Heading as="h3" fontSize="20px">
                  Time:
                </Heading>
                {/* <Timer /> */}
                <div className="timer">
                  <div>
                    <div className="row">
                      <h3>Time Elapsed</h3>
                      <span>
                        {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                      </span>
                      <span>
                        {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                      </span>
                      <span>
                        {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                      </span>
                    </div>
                  </div>
                  <div>
                    {timerOn && (
                      <Button bg="blue.50" onClick={() => setTimerOn(false)}>
                        {" "}
                        Stop{" "}
                      </Button>
                    )}
                    {!timerOn && time !== 0 && (
                      <Button bg="blue.50" onClick={() => setTimerOn(true)}>
                        {" "}
                        Resume{" "}
                      </Button>
                    )}
                    {!timerOn && time > 0 && (
                      <Button ml="20px" bg="blue.50" onClick={resetTimer}>
                        {" "}
                        Reset{" "}
                      </Button>
                    )}
                  </div>
                </div>
              </GridItem>
              <GridItem w="100%">
                Upload an image: <ImageDrop />
              </GridItem>
            </Grid>
          </GridItem>
        </Grid>
        <Button bg="blue.50" onClick={handleEndSessionClick}>
          End Session
        </Button>
      </Box>
    </Box>
  );
}
