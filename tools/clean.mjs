import fs from 'fs';
import url from 'url';
import glob from 'glob';


const files = glob.sync('scribble/*.md');

files.forEach(file => {
  console.log(file)
  const allFileContents = fs.readFileSync(file, 'utf-8');

  function replacer(match) {
    const google = new URL(match);
    const url = google.searchParams.get('q');
    return url;
  }
  
  const regex = new RegExp("http://www.google.com/url\\?q=([^\\)]+)", "g");
  
  const fixed = allFileContents.replace(regex, replacer);
  console.log(fixed)
  fs.writeFileSync(file, fixed);
})
