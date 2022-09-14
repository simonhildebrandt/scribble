import "@babel/polyfill";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, Flex, Link } from '@chakra-ui/react';

import content from "./content";
import { theme } from './theme';
import parseMd from './parse-md';
import Pages from './pages';


const App = () => {
  let pages = parseMd(content);

  pages.sort((a,b) => {
    return b.data.createdAt.localeCompare(a.data.createdAt);
  });

  // pages = pages.slice(7)

  return <ChakraProvider theme={theme} resetCSS={false}>
    <Flex bg="gray.100" width="100%" height="100%" flexDir="column">
      <Flex layerStyle="cursive" px={8} py={4} fontSize="2xl" maxWidth={720} mx="auto">
        <Link href="/" color="gray.300">Scribble</Link>
      </Flex>
      <Flex flexGrow={1} flexShrink={1} overflow="hidden">
        <Flex flexDirection="column" overflowY="scroll" width="100%">
          <Flex p={[5, 10]} bg="white" flexDirection="column" gap={10} maxWidth={720} mx="auto">
            { <Pages pages={pages}/> }
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>;
};

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);