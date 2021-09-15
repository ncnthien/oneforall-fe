export type ItemId = string

export type CartItem = {
  id: ItemId
  url: string
  img: string
  name: string
  price: number
  isSale?: boolean
  reducedPrice?: number
  quantity: number
}

export interface CommonItem {
  id: ItemId
  url: string
  img: string
  name: string
  price: number
  isSale?: boolean
  reducedPrice?: number
}

export interface CartItemState {
  cart: CartItem[]
}
