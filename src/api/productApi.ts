import { AxiosResponse } from 'axios'
import { IItem } from 'components/Item/interface'
import { ISectorItemExtent } from 'components/SectorItemExtent/interface'
import axiosClient from './axiosClient'

interface ProductParams {
  page?: number
  limit?: number
  type: 'laptop' | 'pc' | 'accessory'
  sort?: 'ascend' | 'descend'
  filter?: {
    brand?: string
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
}

export interface ProductData {
  productList: IItem[]
  productDisplay: ISectorItemExtent
}

export const productApi = {
  get: (params: ProductParams): Promise<AxiosResponse<ProductData>> => {
    const url = '/product'
    return axiosClient.get<ProductData>(url, {
      params: params,
    })
  },
}
