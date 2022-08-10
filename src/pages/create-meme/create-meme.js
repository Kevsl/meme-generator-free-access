import { useSelector } from 'react-redux'
import { getCreatedMeme } from '../../services/memes'
import React, { useState } from 'react'
import './create-meme.css'

const CreateMeme = () => {
  const url = useSelector((state) => state.meme.url)
  const id = useSelector((state) => state.meme.id)

  const [text0, setText0] = useState('')
  const [text1, setText1] = useState('')

  return (
    <div>
      <div className="relative">
        <p className="absolute top-20 text-center w-50 fs-32 text-white">
          {text0}
        </p>
        <img src={url} alt="login-meme" className="w-50 br-9 block" />
        <p className="absolute bottom-20 text-center w-50 fs-32 text-white">
          {text1}
        </p>
      </div>
      <h1 className="text-center">Create your meme</h1>

      <input
        className="block w-50 bg-lightGray indent-10 br-9"
        type="text"
        value={text0}
        placeholder="Texte du haut"
        onChange={(e) => {
          setText0(e.target.value)
        }}
      />
      <input
        className="block w-50 bg-lightGray indent-10 br-9"
        type="text"
        value={text1}
        placeholder="Texte du bas"
        onChange={(e) => {
          setText1(e.target.value)
        }}
      />
    </div>
  )
}
export default CreateMeme
