export interface IBrandMain extends IBrand {
  brand: {
    _id: string
    name: string
    value: string
    summary: string
    logo: string
    banner: string
  }
}

export interface IBrand {
  brandType: 'laptop' | 'pc' | 'accessory'
}
