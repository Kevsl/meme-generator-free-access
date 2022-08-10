import axios from 'axios'
const qs = require('qs')

export async function getMemes() {
  return axios
    .get('https://api.imgflip.com/get_memes')
    .then((response) => response.data.data.memes)
}
export async function getCreatedMeme(id, text0, text1) {
  let myFormData = new FormData()
  myFormData.append('template_id', id)
  myFormData.append('username', process.env.REACT_APP_USERNAME)
  myFormData.append('password', process.env.REACT_APP_PASSWORD)
  myFormData.append('text0', text0)
  myFormData.append('text1', text1)

  let axiosConfig = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  }
  return axios
    .post('https://api.imgflip.com/caption_image', myFormData, axiosConfig)
    .then((response) => response.data.data.url)
}
