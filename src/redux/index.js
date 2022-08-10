import { configureStore } from '@reduxjs/toolkit'
import user from './user'
import meme from './meme'

export default configureStore({
  reducer: {
    user,
    meme,
  },
})
