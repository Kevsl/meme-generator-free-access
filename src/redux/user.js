import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    firstName: '',
    lastName: '',
    userId: '',
    accessToken: '',
  },
  reducers: {
    setFirstName: (state, action) => {
      state.firstName = action.payload
    },
    setLastName: (state, action) => {
      state.lastName = action.payload
    },
    setUserId: (state, action) => {
      state.userId = action.payload
    },
    setAccessToken: (state, action) => {
      state.accessToken = action.payload
    },
    // setLogout: (state) => {
    //   return initialState
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setFirstName, setLastName, setUserId, setAccessToken } =
  userSlice.actions

export const getFirstName = (state) => state.user.firstName
export const getLastName = (state) => state.user.lastName
export const getUserId = (state) => state.user.userId
export const getAccessToken = (state) => state.user.accessToken

export default userSlice.reducer
