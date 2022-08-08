import { unified } from 'unified';
import parser from 'remark-parse';
import rehype from 'remark-rehype';
import stringify from 'rehype-stringify';
import extract from 'remark-extract-frontmatter';
import frontmatter from 'remark-frontmatter';
import { parse } from 'yaml';

import obsidian from './obsidian-links-plugin';
import extraData from './extra-data-plugin';


export default function parseMd(content) {
  return content.map(page => {
    const { content, path } = page;
    return unified()
      .use(parser)
      .use(obsidian, { linkBuilder: link => `/#scribble/${link}.md` })
      .use(extract, { yaml: parse })
      .use(extraData, { path } )
      .use(frontmatter)
      .use(rehype)
      .use(stringify)
      .processSync(content)
  })
}
