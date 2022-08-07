import { unified } from 'unified';
import parser from 'remark-parse';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import extract from 'remark-extract-frontmatter';
import frontmatter from 'remark-frontmatter';
import { parse } from 'yaml';

import extraData from './extra-data-plugin';


export default async function parseMd(content) {
  return Promise.all(content.map(async page => {
    const { content, path } = page;
    return unified()
      .use(parser)
      .use(extract, { yaml: parse })
      .use(extraData, { path } )
      .use(frontmatter)
      .use(rehype)
      .use(stringify)
      .process(content)
  }))
}
