import axiosClient from 'apis/axiosClient'
import { AxiosResponse } from 'axios'
import { FetchedProfile } from 'features/Profile/interface'

const profileApi = {
  getProfile: (): Promise<AxiosResponse<FetchedProfile>> => {
    const url = '/profile'
    return axiosClient.get(url)
  },
}

export default profileApi
