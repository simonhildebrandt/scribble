import React from 'react';
import { chakra, Box, Flex, Highlight, Link, Tag } from '@chakra-ui/react';
import { LinkIcon } from '@chakra-ui/icons'


function getName(path) {
  return path.slice(9, path.length - 3);
}

const defaultDateTimeOptions = {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
}
const longDateTimeOptions = {
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short',
}
function parseDate(data, { long = false } = {}) {
  const date = data.createdAt;
  const options = {...defaultDateTimeOptions, ...(long ? longDateTimeOptions : {})}
  try {
    return new Intl.DateTimeFormat('default', options).format(new Date(date));
  } catch(exp) {
    console.log('error parsing data on', data);
  }
}

const tagColouring = ['red', 'orange', 'green', 'blue', 'yellow'];
// Highlight key error: https://github.com/chakra-ui/chakra-ui/issues/6321
export default function Pages({pages}) {
  const tags = [...new Set(pages.map(page => page.data.tags || []).flat())]
  const tagColours = Object.fromEntries(tags.map((tag, i) => [tag, tagColouring[i % tagColouring.length] + '.400']));

  return pages.map(({data, value}) => (
    <Flex key={data.path} id={data.path} flexDir="column">
      <Flex bg="gray.200" px={4} py={2} mb={6} borderRadius={4} color="gray.400" align="center">
        <Highlight query={getName(data.path)} styles={{color: 'gray.700'}}>
          {data.path}
        </Highlight>
        <Box ml={2} color="gray.300">
          <Link href={`#${data.path}`}>
            <LinkIcon/>
          </Link>
        </Box>
      </Flex>
      <Flex color="gray.400" justify="space-between" width="100%">
        <chakra.time dateTime={data.createdAt} display={['none', 'block']}>
          {parseDate(data, {long: true})}
        </chakra.time>
        <chakra.time dateTime={data.createdAt} display={['block', 'none']}>
          {parseDate(data)}
        </chakra.time>
        <Flex gap={2}>
          { data?.tags?.map(tag => (
          <Tag key={tag} bg={tagColours[tag]} color="white">{tag}</Tag>
          ))}
        </Flex>
      </Flex>
      <Box dangerouslySetInnerHTML={{ __html: value }} />
    </Flex>
  ))
}
