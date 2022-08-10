import './App.css'
import Login from './pages/login/login'
import Registration from './pages/login/registration'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  )
}

export default App
