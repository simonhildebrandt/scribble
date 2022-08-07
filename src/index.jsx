import "@babel/polyfill";

import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import { ChakraProvider, Flex } from '@chakra-ui/react';

import content from "./content";
import { theme } from './theme';
import parseMd from './parse-md';
import Pages from './pages';
  

const App = () => {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    parseMd(content).then(data => setPages(data));
  }, []);

  const sorted = [...pages].sort((a,b) => {
    return b.data.createdAt.localeCompare(a.data.createdAt);
  });

  return <ChakraProvider theme={theme} resetCSS={false}>
    <Flex width="100%" height="100%" bg="gray.100" overflowY="scroll">
      <Flex p={8} maxWidth={640} m="auto" bg="white" overflow="hidden" flexDirection="column" gap={10}>
        { <Pages pages={sorted}/> }
      </Flex>
    </Flex>
  </ChakraProvider>;
};

ReactDOM.createRoot(document.getElementById('app')).render(<App/>);