import axiosClient from 'api/axiosClient'
import { AxiosResponse } from 'axios'

export interface TokenData {
  token: string
}

export interface TokenLogin {
  email: string
  password: string
}

export interface TokenRegister extends TokenLogin {
  username: string
}

export interface TokenGoogle {
  tokenId: string
}

export interface TokenFacebook {
  accessToken: string
}

const authApi = {
  login: (data: TokenLogin): Promise<AxiosResponse<TokenData>> => {
    const url = '/auth/login'
    return axiosClient.post(url, data)
  },

  register: (data: TokenRegister): Promise<AxiosResponse<TokenData>> => {
    const url = '/auth/register'
    return axiosClient.post(url, data)
  },

  googleLogin: (data: TokenGoogle): Promise<AxiosResponse<TokenData>> => {
    const url = '/auth/google-login'
    return axiosClient.post(url, data)
  },

  facebookLogin: (data: TokenFacebook): Promise<AxiosResponse<TokenData>> => {
    const url = '/auth/facebook-login'
    return axiosClient.post(url, data)
  },
}

export default authApi
