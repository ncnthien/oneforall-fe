import { AxiosResponse } from 'axios'
import { IHeaderNav } from 'components/Header/HeaderNav/interface'
import axiosClient from './axiosClient'

export const dropdownApi = {
  get: (): Promise<AxiosResponse<IHeaderNav>> => {
    const url = '/dropdown'
    return axiosClient.get<IHeaderNav>(url)
  },
}
