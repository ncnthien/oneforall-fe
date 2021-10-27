import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import filterReducer from 'components/Filter/Filter.slice'
import cartReducer from 'features/Cart/Cart.slice'
import profileReducer from 'features/Profile/Profile.slice'
import authModalReducer from 'components/Header/AuthModal/AuthModal.slice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    profile: profileReducer,
    authModal: authModalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['profile/update/fulfilled'],
      },
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
