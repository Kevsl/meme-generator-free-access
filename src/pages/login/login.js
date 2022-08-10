import './login.css'
import loginMeme from '../../assets/login-meme.jpeg'
import { checkEmail, checkPassword } from '../../utils/regex'
import React, { useState } from 'react'
import { login } from '../../services/auth'
import { useDispatch } from 'react-redux'
import {
  setFirstName,
  setLastName,
  setUserId,
  setAccessToken,
} from '../../redux/user'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailAlert, setEmailAlert] = useState(false)
  const [passwordAlert, setPasswordAlert] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const dispatch = useDispatch()

  function handleLogin(email, password) {
    checkEmail(email) === true && checkPassword(password) === true
      ? login(email, password).then((res) => {
          dispatch(setFirstName(res.data.firstName))
          dispatch(setLastName(res.data.lastName))
          dispatch(setUserId(res.data.userId))
          dispatch(setAccessToken(res.data.access_token))
          localStorage.setItem(
            'accessToken',
            JSON.stringify(res.data.access_token)
          )
        })
      : alert('Problème avec votre saisie')
  }

  function handleEmail(email) {
    setEmail(email)
    email.length > 4 && checkEmail(email) === true
      ? setEmailAlert(false)
      : setEmailAlert(true)
  }

  function handlePassword(param) {
    setPassword(param)
    return param.length > 4 && checkPassword(param) === true
      ? (setPassword(param), setPasswordAlert(false))
      : setPasswordAlert(true)
  }

  return (
    <div>
      <img src={loginMeme} alt="login-meme" className="w-50 br-9 block" />
      <h1 className="text-center">Connexion</h1>

      <input
        className="block w-50 bg-lightGray indent-10 br-9"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => {
          handleEmail(e.target.value)
        }}
      />
      {emailAlert === true ? (
        <p className="text-red text-center">
          Veuillez vérifier votre adresse email!
        </p>
      ) : null}

      <div className="flex block w-50 relative">
        <input
          className=" bg-lightGray indent-10 br-9 w-100"
          type={passwordVisible === true ? 'text' : 'password'}
          placeholder="Password"
          onChange={(e) => {
            handlePassword(e.target.value)
          }}
        />
        <i
          className={
            passwordVisible === true
              ? 'fa-solid fa-eye-slash inline-block absolute eye-icon'
              : 'fa-solid fa-eye  absolute eye-icon inline-block '
          }
          onClick={() => {
            passwordVisible === true
              ? setPasswordVisible(false)
              : setPasswordVisible(true)
          }}
        ></i>
      </div>

      {
        // <i className="fa-solid fa-eye-slash"></i>
        // <i className="fa-solid fa-eyes"></i>
      }
      {passwordAlert === true ? (
        <p className="text-red text-center">
          Votre mot de passe doit contenir 1 majuscule, 1 minuscule, 1 chiffre
          et 1 caractère spécial.
        </p>
      ) : null}

      <button
        className="block w-50 bg-lightGray br-9 text-center btn-border bg-blue"
        onClick={() => {
          handleLogin(email, password)
        }}
      >
        Connexion
      </button>
    </div>
  )
}
export default Login
