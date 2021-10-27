import { AxiosResponse } from 'axios'
import { IHistory } from 'features/History/pages/Main/interface'
import axiosClient from './axiosClient'

export const orderApi = {
  get: (): Promise<AxiosResponse<IHistory>> => {
    const url = `/order`
    return axiosClient.get<IHistory>(url)
  },
}
