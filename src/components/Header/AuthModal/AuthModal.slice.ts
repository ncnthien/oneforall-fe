import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EAuthModalTab } from 'components/enum'
import { AuthModalState } from './interface'

const initialState: AuthModalState = {
  showAuthModal: false,
  activeAuthModalTab: EAuthModalTab.LOGIN,
}

export const authModalSlice = createSlice({
  name: 'authModal',
  initialState,
  reducers: {
    setShow(state, action: PayloadAction<boolean>) {
      console.log(action.payload)
      state.showAuthModal = action.payload
    },
    setActive(state, action: PayloadAction<EAuthModalTab>) {
      state.activeAuthModalTab = action.payload
    },
  },
})

export const { setShow, setActive } = authModalSlice.actions
export default authModalSlice.reducer
