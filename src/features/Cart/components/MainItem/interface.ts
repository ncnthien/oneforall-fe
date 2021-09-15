export interface IMainItem {
  id: string
  url: string
  img: string
  name: string
  price: number
  isSale?: boolean
  reducedPrice?: number
  quantity: number
}
