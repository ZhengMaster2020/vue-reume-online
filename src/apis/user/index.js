import request from '../request'

export const login = params => request({ url: '/login', method: 'POST', params })
export const logout = params => request(params)

export default {
  login,
  logout
}
