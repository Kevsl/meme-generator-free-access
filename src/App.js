import './App.css'

import Home from './pages/home/home'
import CreateMeme from './pages/create-meme/create-meme'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-meme" element={<CreateMeme />} />
      </Routes>
    </div>
  )
}

export default App
