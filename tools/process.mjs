// import {read} from 'to-vfile'
// import {unified} from 'unified'
// import remarkParse from 'remark-parse'
// import remarkFrontmatter from 'remark-frontmatter'
// import remarkStringify from 'remark-stringify'

// main()

// async function main() {
//   const file = await unified()
//     .use(remarkParse)
//     .use(remarkFrontmatter, ['yaml', 'toml'])
//     .use(remarkStringify)
//     .process(await read('scribble/New Site.md'))
//     // .process('---\nx: y\n---\n# stuff')

//   console.log(String(file));
// }


import glob from 'glob';
import fs from 'fs/promises';
import pathtools from 'node:path';
import RSS from 'rss';

import parseMd from '../src/parse-md.js';


async function parseFiles() {
  const files = glob.sync('scribble/*.md');
  console.log(files);

  const data = await Promise.all(files.map(async path => {
    const content = await fs.readFile(path, {encoding: 'utf-8'})
      //filename: pathtools.basename(path),
      return { path, content }
  }));
  return data;
}

const records = await parseFiles();
fs.writeFile('src/content.js', "export default " + JSON.stringify(records));

const result = parseMd(records);

console.log(result);

const site = "https://simonhildebrandt.com";

const feed = new RSS({
  title: "Scribble",
  feed_url: site + "/feed.xml",
  site_url: site,
  author: "Simon Hildebrandt"
});

result.forEach(item => feed.item({
  title: item.data.path,
  url: site + "/#" + item.data.path,
  guid: item.data.path,
  categories: item.data.tags,
  date: item.data.createdAt,
  description: item.value,
}))

console.log(feed.xml({indent: true}));
fs.writeFile('public/feed.xml', feed.xml({indent: true}));
