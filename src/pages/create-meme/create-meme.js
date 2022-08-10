import { useSelector } from 'react-redux'
import { getCreatedMeme } from '../../services/memes'
import React, { useState } from 'react'

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
    <div>
      <img src={url} alt="login-meme" className="w-50 br-9 block" />
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

      <button
        className="block w-50 bg-lightGray br-9 text-center btn-border bg-blue"
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
