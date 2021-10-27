interface OrderProduct {
  _id: string
  productRef: { _id: string; name: string }
  quantity: number
  cost: number
}

export interface IHistory {
  orderList: {
    _id: string
    date: string
    code: string
    products: OrderProduct[]
    status: 'pending' | 'claimed' | 'delivering' | 'delivered'
    user: string
  }[]
  total: number
}
