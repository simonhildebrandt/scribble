import {visit} from 'unist-util-visit'

export default function addExtraData(options) {
  return (_tree, file) => {
    file.data = { ...file.data, ...options };
  }
}