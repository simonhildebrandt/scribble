import "@babel/polyfill";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, Flex, Link, Image } from '@chakra-ui/react';

import content from "./content";
import { theme } from './theme';
import parseMd from './parse-md';
import Pages from './pages';


const App = () => {
  let pages = parseMd(content);

  pages.sort((a,b) => {
    if (a.data.createdAt) {
      if (b.data.createdAt) {
        return b.data.createdAt.localeCompare(a.data.createdAt);
      } else {
        console.error("Missing date from ", b);
      }
    } else {
      console.error("Missing date from ", a);
    }
  return -1;
});

  // pages = pages.slice(6)

  return <ChakraProvider theme={theme} resetCSS={false}>
    <Flex bg="gray.100" width="100%" height="100%" flexDir="column">
      <Flex layerStyle="cursive" px={8} py={4} fontSize="2xl" maxWidth={640} mx="auto" gap="8px">
        <Link href="/" color="gray.300">Scribble</Link>
        <Link href="/feed.xml"><Image src="assets/rss_icon.svg" boxSize="16px"/></Link>
      </Flex>
      <Flex flexGrow={1} flexShrink={1} overflow="hidden" width="100%">
        <Flex flexDirection="column" overflowY="scroll" width="100%">
          <Flex p={[5, 10]} bg="white" flexDirection="column" gap={10} maxWidth={640} mx="auto">
            { <Pages pages={pages}/> }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>;
};

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);
