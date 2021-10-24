export interface IProduct {
  _id: string
  name: string
  type: 'laptop' | 'pc' | 'accessory'
  brand: string
  subBrand: string
  price: number
  isSale: boolean
  reducedPrice?: number
  images: string[]
  quantity: number
  cpu?: { value: string; text?: string }
  ram?: { value: string; text?: string }
  hardDrive?: {
    value: string
    text?: string
  }
  hardDriveNumber?: {
    value: string
    text?: string
  }
  monitorDimension?: {
    value: string
    text?: string
  }
  monitorRatio?: {
    value: string
    text?: string
  }
  monitorBackground?: {
    value: string
    text?: string
  }
  frequency?: {
    value: string
    text?: string
  }
  graphicsCard?: {
    value: string
    text?: string
  }
  graphicsMemory?: {
    value: string
    text?: string
  }
  weight?: { value: string; text?: string }
  resolution?: {
    value: string
    text?: string
  }
  accessoryType?: {
    value: string
    text?: string
  }
  extraDetail?: {
    field: string
    value: string
  }[][]
}

export interface IItem extends IProduct {
  className?: string
}
