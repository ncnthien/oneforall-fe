import { AxiosResponse } from 'axios'
import { Pay } from 'features/Cart/pages/Pay/interface'
import axiosClient from './axiosClient'

interface PayData {
  phone?: string
  deliveryAddress?: {
    city?: string
    district?: string
    ward?: string
    address?: string
  }
  cart: {
    productRef: string
    quantity: number
    cost: number | undefined
  }[]
}

export const payApi = {
  get: (): Promise<AxiosResponse<Pay>> => {
    const url = '/pay'
    return axiosClient.get<Pay>(url)
  },
  pay: (data: PayData): Promise<AxiosResponse> => {
    const url = 'pay'
    return axiosClient.post(url, data)
  },
}
