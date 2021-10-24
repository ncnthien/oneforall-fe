// api/axiosClient.js
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import queryString from 'query-string'

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'content-type': 'application/json',
  },
  paramsSerializer: params => queryString.stringify(params),
})

const jwtTokenKey = 'jwtToken'

axiosClient.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = localStorage.getItem(jwtTokenKey) || ''

  if (config.headers) {
    config.headers['authorization'] = token
  }

  return config
})
axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response

      if (status === 400) {
        throw error.response.data
      }

      if (status === 401 || status === 403) {
        localStorage.removeItem(jwtTokenKey)

        throw error.response.data
      }
    }
  }
)
export default axiosClient
