import './login.css'
import loginMeme from '../../assets/login-meme.jpeg'
import { checkEmail, checkPassword } from '../../utils/regex'
import React, { useState } from 'react'
import { register } from '../../services/auth'

const Registration = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailAlert, setEmailAlert] = useState(false)
  const [passwordConfirmAlert, setPasswordConfirmAlert] = useState('')
  const [passwordAlert, setPasswordAlert] = useState(false)
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleRegistration(email, password) {
    checkEmail(email) === true && checkPassword(password) === true
      ? register(email, password, firstName, lastName)
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
    password.length > 4 && checkPassword(password) === true
      ? setPasswordAlert(false)
      : setPasswordAlert(true)
  }
  function handlePasswordConfirm(param) {
    param.length > 4 && param !== password
      ? setPasswordConfirmAlert(true)
      : setPasswordConfirmAlert(false)
  }

  return (
    <div>
      <img src={loginMeme} alt="login-meme" className="w-50 br-9 block" />
      <h1 className="text-center">Register</h1>

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
          className="block  bg-lightGray indent-10 br-9 w-100"
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

      {passwordAlert === true ? (
        <p className="text-red text-center">
          Votre mot de passe doit contenir 1 majuscule, 1 minuscule, 1 chiffre
          et 1 caractère spécial.
        </p>
      ) : null}
      <div className="flex block w-50 relative">
        <input
          className="block  bg-lightGray indent-10 br-9 w-100"
          type={passwordVisible === true ? 'text' : 'password'}
          placeholder="Confirm your password"
          onChange={(e) => {
            handlePasswordConfirm(e.target.value)
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
      {passwordConfirmAlert === true ? (
        <p className="text-red text-center">
          Vos mots de passe doivent être identiques
        </p>
      ) : null}

      <input
        className="block  bg-lightGray indent-10 br-9 w-50"
        type="text"
        placeholder="first name"
        onChange={(e) => {
          setFirstName(e.target.value)
        }}
      />
      <input
        className="block  bg-lightGray indent-10 br-9 w-50"
        type="text"
        placeholder="last name"
        onChange={(e) => {
          setLastName(e.target.value)
        }}
      />

      <button
        className="block w-50 bg-lightGray br-9 text-center btn-border bg-blue"
        onClick={() => {
          handleRegistration(email, password)
        }}
      >
        Registration
      </button>
    </div>
  )
}
export default Registration
