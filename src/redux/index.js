import { configureStore } from '@reduxjs/toolkit'
import meme from './meme'

export default configureStore({
  reducer: {
    meme,
  },
})
