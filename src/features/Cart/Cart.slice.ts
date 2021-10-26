import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CartItemState, CommonItem, ItemId } from './interface'

const storageKey = 'cart'

const addToState = (state: CartItemState, commonItem: CommonItem) => {
  const indexItem = state.cart.findIndex(
    cartItem => cartItem.id === commonItem.id
  )

  if (indexItem <= -1) {
    state.cart.push({ ...commonItem, quantity: 1 })
    return
  }

  state.cart[indexItem].quantity = state.cart[indexItem].quantity + 1
}

const increaseItemQuantity = (state: CartItemState, itemId: ItemId) => {
  const indexItem = state.cart.findIndex(item => item.id === itemId)

  if (indexItem <= -1) {
    return
  }

  state.cart[indexItem].quantity = state.cart[indexItem].quantity + 1
}

const decreaseItemQuantity = (state: CartItemState, itemId: ItemId) => {
  const indexItem = state.cart.findIndex(item => item.id === itemId)

  if (indexItem <= -1) {
    return
  }

  if (state.cart[indexItem].quantity <= 1) {
    state.cart.splice(indexItem, 1)
    return
  }

  state.cart[indexItem].quantity = state.cart[indexItem].quantity - 1
}

const removeCartItem = (state: CartItemState, itemId: ItemId) => {
  const indexItem = state.cart.findIndex(item => item.id === itemId)

  if (indexItem <= -1) {
    return
  }

  state.cart.splice(indexItem, 1)
}

const saveCartToStorage = (state: CartItemState) => {
  const jsonCart = JSON.stringify(state.cart)
  localStorage.setItem(storageKey, jsonCart)
}

const loadInitialState = () => {
  const cart = localStorage.getItem(storageKey)
  if (cart) {
    return JSON.parse(cart)
  }
  return []
}

const initialState: CartItemState = {
  cart: loadInitialState(),
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<CommonItem>) => {
      addToState(state, action.payload)
      saveCartToStorage(state)
    },
    increaseQuantity: (state, action: PayloadAction<ItemId>) => {
      increaseItemQuantity(state, action.payload)
      saveCartToStorage(state)
    },
    decreaseQuantity: (state, action: PayloadAction<ItemId>) => {
      decreaseItemQuantity(state, action.payload)
      saveCartToStorage(state)
    },
    removeItem: (state, action: PayloadAction<ItemId>) => {
      removeCartItem(state, action.payload)
      saveCartToStorage(state)
    },
    handlePay: state => {
      state.cart = []
      saveCartToStorage(state)
    },
  },
})

export const {
  add,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
  handlePay,
} = cartSlice.actions
export default cartSlice.reducer
