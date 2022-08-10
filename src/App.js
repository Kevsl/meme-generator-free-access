import './App.css'
import Login from './pages/login/login'
import Registration from './pages/login/registration'
import Home from './pages/home/home'
import CreateMeme from './pages/create-meme/create-meme'
import { useDispatch } from 'react-redux'
import { setFirstName, setLastName, setAccessToken } from './redux/user'
import React, { useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

function App() {
  const token = JSON.parse(localStorage.getItem('accessToken'))
  const firstName = JSON.parse(localStorage.getItem('firstName'))
  const lastName = JSON.parse(localStorage.getItem('lastName'))
  const currentLocation = window.location.pathname
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (!token || token === 'undefined') {
      if (currentLocation !== '/login' && currentLocation !== '/register') {
        window.location.replace('/login')
        console.log(currentLocation)
      }
    }
  }, [currentLocation, token])

  function getUsersData() {
    return lastName && firstName && token
      ? (dispatch(setFirstName(firstName)),
        dispatch(setLastName(lastName)),
        dispatch(setAccessToken(token)))
      : navigate('/login')
  }

  useEffect(() => {
    getUsersData()
  }, [firstName])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meme" element={<CreateMeme />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
