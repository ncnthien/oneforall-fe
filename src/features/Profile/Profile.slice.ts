import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import profileApi from 'apis/profileApi'
import { ProfileState } from 'features/Profile/interface'

export const getProfile = createAsyncThunk('profile/get', async () => {
  const { data: profile } = await profileApi.getProfile()
  return profile
})

const initialState: ProfileState = {
  profile: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    clearProfile(state) {
      state.profile = null
    },
  },
  extraReducers: builder => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.profile = { ...action.payload }
    })

    builder.addCase(getProfile.rejected, state => {
      state.profile = null
    })
  },
})

export const { clearProfile } = profileSlice.actions
export default profileSlice.reducer
