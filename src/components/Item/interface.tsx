export interface IItem {
  url: string
  img: string
  name: string
  price: number
  isSale?: boolean
  reducedPrice?: number
  className?: string
}
