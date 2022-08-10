import './App.css'
import Login from './pages/login/login'
import Registration from './pages/login/registration'
import React, { useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'

function App() {
  const token = localStorage.getItem('accessToken')
  const currentLocation = window.location.pathname

  useEffect(() => {
    if (!token || token === 'undefined') {
      if (currentLocation !== '/login') {
        window.location.replace('/login')
      }
    }
  }, [currentLocation, token])

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
