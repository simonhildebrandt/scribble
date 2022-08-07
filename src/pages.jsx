import React from 'react';
import { Box, Flex, Highlight, Link } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons'


function getName(path) {
  return path.slice(9, path.length - 3);
}

const dateTimeOptions = {
  hour: 'numeric', 
  minute: 'numeric', 
  second: 'numeric',
  year: 'numeric', 
  month: 'short', 
  day: 'numeric',
  timeZoneName: 'short'
}
function parseDate(date) {
  return new Intl.DateTimeFormat('default', dateTimeOptions).format(new Date(date));
}

// Highlight key error: https://github.com/chakra-ui/chakra-ui/issues/6321
export default function Pages({pages}) {
  return pages.map(({data, value}) => (
    <Box key={data.path} id={data.path}>
      <Flex bg="gray.200" px={4} py={2} mb={6} borderRadius={4} color="gray.400" align="center">
        <Highlight query={getName(data.path)}styles={{color: 'gray.700'}}>
          {data.path}
        </Highlight>
        <Box ml={2} color="gray.300">
          <Link href={`#${data.path}`}>
            <LinkIcon/>
          </Link>
        </Box>
      </Flex>
      <Box color="gray.400">
        <time dateTime={data.createdAt}>
          {parseDate(data.createdAt)}
        </time>
      </Box>
      <Box dangerouslySetInnerHTML={{ __html: value }} />
    </Box>
  ))
}