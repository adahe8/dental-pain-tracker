import { useQuery } from "../convex/_generated/react";
import { useMutation } from "../convex/_generated/react";

import { useRouter } from "next/router";

import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function SessionSummary() {
  const router = useRouter();

  let data = useQuery("getSessions");
  // let parsedData = JSON.stringify(data);
  let userData;

  let sessionData;

  if (data != undefined) {
    sessionData = data[data.length - 1];
    console.log(sessionData);
  }

  function formatTime(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds - hours * 3600) / 60);
    const remainingSeconds = seconds - hours * 3600 - minutes * 60;

    const formattedHours = hours.toString().padStart(2, "0");
    const formattedMinutes = minutes.toString().padStart(2, "0");
    const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  const backToHomeClick = (e) => {
    router.push("/selectUser");
  };

  return (
    <Box
      w="100vw"
      h="100vh"
      bg="blue.50"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        w="90vw"
        h="90vh"
        bg="white"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          w="500px"
          h="400px"
          bg="bblue.50"
          display="flex"
          justifyContent="center"
          flexDir="column"
        >
          <Grid templateRows="100px 250px" gap={6}>
            <GridItem
              w="100%"
              bg="green.50"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pl="10px"
            >
              <Heading as="h3" fontSize="30px" color="white">
                End Summary
              </Heading>
              <CloseIcon fontSize="28px" w="100px" color="white" pr="8px" />
            </GridItem>
            <GridItem w="100%">
              {sessionData && (
                <Grid templateRows="60px 60px" gap={8} pl="20px">
                  <GridItem w="100%">
                    {userData && (
                      <Heading as="h3" fontSize="20px">
                        {userData.body.name}
                      </Heading>
                    )}
                    <Heading as="h3" fontSize="20px">
                      Summary for {sessionData.body.date} session
                    </Heading>
                  </GridItem>
                  <GridItem w="100%">
                    <Heading as="h3" fontSize="20px">
                      Average Indicated Pain: {sessionData.body.averagePain}
                    </Heading>
                    <Heading as="h3" fontSize="20px">
                      Session Duration: {formatTime(sessionData.body.time)}
                    </Heading>
                  </GridItem>
                </Grid>
              )}
            </GridItem>
          </Grid>
          <Button bg="green.50" w="120px" alignSelf="center" mb="22px" p="8px" onClick={backToHomeClick}>
            Back to Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
