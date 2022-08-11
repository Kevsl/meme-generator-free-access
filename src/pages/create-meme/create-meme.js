import { useSelector } from 'react-redux'
import { getCreatedMeme } from '../../services/memes'
import React, { useState } from 'react'
import './create-meme.css'

const CreateMeme = () => {
  const [url, setUrl] = useState(useSelector((state) => state.meme.url))
  const id = useSelector((state) => state.meme.id)

  const [text0, setText0] = useState('')
  const [text1, setText1] = useState('')

  function handleSubmitMeme(id, text0, text1) {
    getCreatedMeme(id, text0, text1).then((res) => {
      setUrl(res)
    })
  }

  return (
    <div className="w-50">
      <img src={url} alt="login-meme" className=" br-9 block mw-100" />
      <h1 className="text-center">Create your meme</h1>

      <input
        className="block mb-10 w-100   bg-lightGray indent-10 br-9"
        type="text"
        value={text0}
        placeholder="Texte du haut"
        onChange={(e) => {
          setText0(e.target.value)
        }}
      />
      <input
        className="block mb-10 w-100   bg-lightGray indent-10 br-9"
        type="text"
        value={text1}
        placeholder="Texte du bas"
        onChange={(e) => {
          setText1(e.target.value)
        }}
      />

      <button
        className="block mb-10 w-100  bg-lightGray br-9 text-center btn-border bg-blue"
        onClick={() => {
          handleSubmitMeme(id, text0, text1)
        }}
      >
        Create your meme
      </button>
    </div>
  )
}
export default CreateMeme
