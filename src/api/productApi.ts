import { AxiosResponse } from 'axios'
import { IProduct } from 'components/Item/interface'
import { ISectorItemExtent } from 'components/SectorItemExtent/interface'
import axiosClient from './axiosClient'

export interface ProductParams {
  page?: number
  limit?: number
  type: 'laptop' | 'pc' | 'accessory'
  sort?: 'ascend' | 'descend'
  brand?: string
  isSale?: boolean
  subBrand?: string
  price?: {
    min?: number
    max?: number
  }
  cpu?: string
  ram?: string
  hardDrive?: string
  hardDriveNumber?: number
  monitorDimension?: {
    min?: number
    max?: number
  }
  monitorRatio?: string
  monitorBackground?: string
  frequency?: string
  graphicsCard?: string
  graphicsMemory?: string
  weight?: {
    min?: number
    max?: number
  }
  resolution?: string
  accessoryType?: string
}

export interface ProductData {
  productList: IProduct[]
  productDisplay: ISectorItemExtent
}

export const productApi = {
  get: (params: ProductParams): Promise<AxiosResponse<ProductData>> => {
    const url = '/product'
    console.log(params)
    return axiosClient.get<ProductData>(url, {
      params: params,
    })
  },
}
