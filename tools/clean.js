const fs = require('fs');
const url = require('url');

const allFileContents = fs.readFileSync('scribble/Podcasting.md', 'utf-8');

function replacer(match) {
  const google = new URL(match);
  const url = google.searchParams.get('q');
  return url;
}

const regex = new RegExp("http://www.google.com/url\\?q=([^\\)]+)", "g");

const fixed = allFileContents.replace(regex, replacer);

fs.writeFileSync('scribble/PodcastingFixed.md', fixed);
