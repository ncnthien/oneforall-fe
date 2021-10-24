import { AxiosResponse } from 'axios'
import { IBrandMain } from 'features/Brand/pages/Main/interface'
import axiosClient from './axiosClient'
import { ProductData, ProductParams } from './productApi'

export interface BrandProductData extends ProductData {
  total: {
    laptop: number
    pc: number
    accessory: number
  }
}

export const brandApi = {
  get: (brandName: string): Promise<AxiosResponse<IBrandMain>> => {
    const url = `/brand/${brandName}/detail`
    return axiosClient.get<IBrandMain>(url)
  },
  getProductListOfBrand: (
    params: ProductParams,
    brandId: string
  ): Promise<AxiosResponse<BrandProductData>> => {
    const url = `brand/${brandId}/product`
    return axiosClient.get<BrandProductData>(url, {
      params: params,
    })
  },
}
