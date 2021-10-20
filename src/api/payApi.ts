import { AxiosResponse } from 'axios'
import { Pay } from 'features/Cart/pages/Pay/interface'
import axiosClient from './axiosClient'

export const payApi = {
  get: (): Promise<AxiosResponse<Pay>> => {
    const url = '/pay'
    return axiosClient.get<Pay>(url)
  },
}
