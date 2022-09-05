import { AuthSession } from '@/hooks/auth/useAuthSession'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { getDeviceStorageItem } from '../deviceStorage'

class ApiClient {
  private _instance: AxiosInstance

  constructor() {
    this._instance = axios.create({
      baseURL: 'http://localhost:8000/api',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Credentials': true,
        'X-Requested-With': 'XMLHttpRequest'
      },
      withCredentials: true
    })

    this.setInterceptors()
  }

  private setInterceptors() {
    this._instance.interceptors.request.use(
      config => {
        const sessionData = getDeviceStorageItem('session')
        const authSession: AuthSession =
          typeof sessionData === 'string' ? JSON.parse(sessionData) : {}
        const { accessToken } = authSession
        try {
          if (!!config.headers && !!accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
          }
          return config
        } catch (error) {
          return Promise.reject(error)
        }
      },
      error => Promise.reject(error)
    )

    axios.interceptors.response.use(
      res => res,
      err => {
        console.error(err)
      }
    )
  }

  public get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._instance.get<T, R>(url, config)
  }

  public post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._instance.post<T, R>(url, data, config)
  }

  public put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._instance.put<T, R>(url, data, config)
  }

  public delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this._instance.delete<T, R>(url, config)
  }
}

const apiClient = new ApiClient()

export default apiClient
