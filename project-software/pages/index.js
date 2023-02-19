import Image from "next/image";
import { Box, Grid, GridItem, Heading, Button } from "@chakra-ui/react";

import { useRouter } from "next/router";

const LandingPage = () => {
  const router = useRouter();

  const handleBeginClick = () => {
    router.push("./selectUser")
  }

  return (
    <Box
      bg="blue.50"
      w="100%"
      h="100vh"
      color="white"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
    >
      <Grid
        templateColumns="40% 60%"
        templateRows="repeat(2, 1fr)"
        alignItems="center"
        height="300px"
        width="90%"
        gap={8}
      >
        <GridItem w="100%" display="flex" justifyContent="end">
          <Image
            src="/images/teeth_svgrepo.com.svg" // Route of the image file
            height={144} // Desired size with correct aspect ratio
            width={144} // Desired size with correct aspect ratio
            alt="logo"
          />
        </GridItem>
        <GridItem w="100%">
          <Heading as="h1" fontSize="70px">Denteels</Heading>
        </GridItem>
        <GridItem w="100%" colStart={2} colEnd={3} pb="70px">
          <Heading as="h1">Pain Measuring Tool</Heading>
        </GridItem>
        <GridItem w="100%" />
      </Grid>
      <Button bg="green.50" color="white" variant="solid" onClick={handleBeginClick}>
        Begin
      </Button>
    </Box>
  );
};

export default LandingPage;
