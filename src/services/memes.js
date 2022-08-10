import axios from 'axios'
const qs = require('qs')

export async function getMemes() {
  return axios
    .get('https://api.imgflip.com/get_memes')
    .then((response) => response.data.data.memes)
}
