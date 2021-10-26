import axiosClient from 'api/axiosClient'
import { AxiosResponse } from 'axios'
import { FetchedProfile, ChangePasswordBody } from 'features/Profile/interface'

const profileApi = {
  getProfile: (): Promise<AxiosResponse<FetchedProfile>> => {
    const url = '/profile'
    return axiosClient.get(url)
  },

  update: (data: FetchedProfile): Promise<AxiosResponse<FetchedProfile>> => {
    const url = '/profile'
    return axiosClient.put(url, data)
  },

  changePassword: (data: ChangePasswordBody): Promise<AxiosResponse> => {
    const url = '/profile/change-password'
    return axiosClient.post(url, data)
  },
}

export default profileApi
