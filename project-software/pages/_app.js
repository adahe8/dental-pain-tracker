import "@/styles/globals.css";
import * as React from "react";
import customTheme from "./theme";

import { ChakraProvider } from '@chakra-ui/react';
import { ConvexProvider, ConvexReactClient } from "convex/react";

const address = process.env.NEXT_PUBLIC_CONVEX_URL;
console.log(address);

const convex = new ConvexReactClient(address);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={customTheme}>
      <ConvexProvider client={convex}>
        <Component {...pageProps} />
      </ConvexProvider>
    </ChakraProvider>
  );
}
