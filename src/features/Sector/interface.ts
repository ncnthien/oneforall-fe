export interface ISector {
  sectorType: 'laptop' | 'pc' | 'accessory'
  brandPage?: boolean
}

export interface IBrand {
  name: string
  desc: string
  logo: string
  img: string
}
