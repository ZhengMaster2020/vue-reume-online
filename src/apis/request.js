import axios from 'axios'
import { Message, Notification } from 'element-ui'

const config = {
  baseURL: 'http://localhost:3000/api/',
  timeout: 6000
}
const instance = axios.create(config)

//请求拦截
instance.interceptors.request.use(
  config => {
    const { url, params, ...rest } = config
    const newParams = url.toLowerCase() === 'get' ? { params } : { data: params }
    return { url, ...rest, ...newParams }
  },
  err => Promise.reject(err)
)

//响应拦截
instance.interceptors.response.use(
  response => {
    console.log(response, 'ponse')
    return response.data
  },
  err => Promise.reject(err)
)

// 提示信息处理
const handleMessage = option => {
  const { type, message = '接口调用异常' } = option || {}
  Notification[type ? type : 'error']({ title: '提示', duration: 3500, message })
}

// 请求方法封装
const request = payload =>
  new Promise((resolve, reject) => {
    instance(payload)
      .then(data => {
        console.log(data, 'data')
        resolve(data)
      })
      .catch(reason => {
        console.log(reason, 'error')
        handleMessage()
        reject(reason)
      })
  })

export default request
