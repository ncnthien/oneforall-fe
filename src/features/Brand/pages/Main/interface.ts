export interface IBrandMain extends IBrand {
  brand: {
    name: string
    desc: string
    logo: string
    img: string
  }
}

export interface IBrand {
  brandType: 'laptop' | 'pc' | 'accessory'
}
