import { getMemes } from '../../services/memes'
import React, { useState } from 'react'
import MemeCard from '../../components/memeCard'
import './home.css'

const Home = () => {
  const [datas, setDatas] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  function LoadDatas() {
    return isLoaded === false
      ? getMemes().then((res) => {
          setDatas(res)
          setIsLoaded(true)
        })
      : null
  }
  LoadDatas()

  return (
    <div>
      <div className="bg-blue br-9 text-center mb-30 ">
        <h1>Meme Generator </h1>
      </div>
      <div className="  flex wrap jc-sa items-center">
        {datas.map((data, i) => {
          return (
            <MemeCard title={data.name} id={data.id} image={data.url} key={i} />
          )
        })}
      </div>
    </div>
  )
}
export default Home
