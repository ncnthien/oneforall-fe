export type Brand = {
  name: string
  path: string
  url: string
}

export interface IBrandCarousel {
  brandList: Brand[]
  isSlide?: boolean
}
