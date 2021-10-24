import { AxiosResponse } from 'axios'
import { Home } from 'features/Home/pages/Main/interface'
import axiosClient from './axiosClient'

export const homeApi = {
  get: (): Promise<AxiosResponse<Home>> => {
    const url = '/home'
    return axiosClient.get<Home>(url)
  },
}
