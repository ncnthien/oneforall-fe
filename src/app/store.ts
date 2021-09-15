import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import filterReducer from 'components/Filter/Filter.slice'
import cartReducer from 'features/Cart/Cart.slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
