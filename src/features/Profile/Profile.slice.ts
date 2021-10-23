import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import profileApi from 'apis/profileApi'
import { FetchedProfile, ProfileState } from 'features/Profile/interface'

export const getProfile = createAsyncThunk('profile/get', async () => {
  const { data: profile } = await profileApi.getProfile()
  return profile
})

export const updateProfile = createAsyncThunk(
  'profile/update',
  async (profile: FetchedProfile, { rejectWithValue }) => {
    try {
      const response = await profileApi.update(profile)
      return response
    } catch (error) {
      return rejectWithValue(error)
    }
  }
)

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

    builder.addCase(updateProfile.fulfilled, (state, action) => {
      state.profile = { ...action.payload.data } as FetchedProfile
    })
  },
})

export const { clearProfile } = profileSlice.actions
export default profileSlice.reducer
