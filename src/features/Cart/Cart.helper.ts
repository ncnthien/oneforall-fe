import { CartItem } from './interface'

export const getQuantity = (cart: CartItem[]): number => {
  return cart.reduce((quantity, item) => quantity + item.quantity, 0)
}

export const getCost = (cart: CartItem[]): number => {
  return cart.reduce(
    (cost, item) =>
      item.isSale && item.reducedPrice
        ? cost + item.reducedPrice
        : cost + item.price,
    0
  )
}
