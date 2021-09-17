export interface IDetail {
  params: string
}

export type Product = {
  id: string
  name: string
  url: string
  type: string
  images: string[]
  brand: {
    name: string
    image: string
  }
  isSale: boolean
  price: number
  reducedPrice: number
  details: {
    name: string
    value: string
  }[]
}
