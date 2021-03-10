export interface AxiosResponse<T = any> {
  data: T
  status: number
  statusText: string
  headers: any
  request?: any
}
