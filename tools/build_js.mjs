// import {read} from 'to-vfile'
// import {unified} from 'unified'
// import remarkParse from 'remark-parse'
// import remarkFrontmatter from 'remark-frontmatter'
// import remarkStringify from 'remark-stringify'

import watch from 'node-watch';


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


async function parseFiles() {
  const files = glob.sync('scribble/*.md');
  console.log(files);

  const data = await Promise.all(files.map(async path => {
    const content = await fs.readFile(path, {encoding: 'utf-8'})
      //filename: pathtools.basename(path), 
      return { path, content }
  }));

  const prefix = "export default "

  fs.writeFile('src/content.js', prefix + JSON.stringify(data));
}

if (process.env.WATCH) {
  console.log('watching scribble/*.md');
  parseFiles();
  watch('scribble', { filter: /\.md$/ }, parseFiles);
} else {
  parseFiles();
}