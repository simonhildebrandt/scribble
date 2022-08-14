import React from 'react';
import { Box, Flex, Highlight, Link, Tag } from '@chakra-ui/react';
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

const tagColouring = ['red', 'orange', 'green', 'blue', 'yellow'];
// Highlight key error: https://github.com/chakra-ui/chakra-ui/issues/6321
export default function Pages({pages}) {
  const tags = [...new Set(pages.map(page => page.data.tags || []).flat())]

  const tagColours = Object.fromEntries(tags.map((tag, i) => [tag, tagColouring[i % tagColouring.length] + '.400']));

  console.log(tagColours);

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
      <Flex color="gray.400" justify="space-between" with="100%">
        <time dateTime={data.createdAt}>
          {parseDate(data.createdAt)}
        </time>
        <Flex gap={2}>
          { data?.tags?.map(tag => (
          <Tag key={tag} bg={tagColours[tag]} color="white">{tag}</Tag>
          ))}
        </Flex>
      </Flex>
      <Box dangerouslySetInnerHTML={{ __html: value }} />
    </Box>
  ))
}