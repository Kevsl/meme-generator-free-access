import axios from 'axios'
const qs = require('qs')

export async function loginFunction(email, password) {
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  return await axios
    .post(
      'https://yellow-little-truck.herokuapp.com/auth/signin',
      qs.stringify({ email: email, password: password }),
      axiosConfig
    )
    .then(
      (res) => {
        console.log(res.data)
      },
      (error) => {
        console.log(error)
      }
    )
}
