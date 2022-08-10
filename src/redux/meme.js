import { createSlice } from '@reduxjs/toolkit'

export const memeSlice = createSlice({
  name: 'meme',
  initialState: {
    id: '',
    url: '',
  },
  reducers: {
    setMemeId: (state, action) => {
      state.id = action.payload
    },
    setMemeUrl: (state, action) => {
      state.url = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setMemeId, setMemeUrl } = memeSlice.actions

export const getMemeId = (state) => state.meme.id
export const getMemeUrl = (state) => state.meme.url

export default memeSlice.reducer
