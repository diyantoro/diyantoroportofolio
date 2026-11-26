import axios, { type AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: '/api',
  headers: { 'Content-Type': 'application/json' },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.error || 'Something went wrong'
    return Promise.reject(new Error(message))
  }
)

export async function get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
  const { data } = await api.get<T>(url, config)
  return data
}

export async function post<T>(
  url: string,
  body?: unknown,
  config?: AxiosRequestConfig
): Promise<T> {
  const { data } = await api.post<T>(url, body, config)
  return data
}

export default api
