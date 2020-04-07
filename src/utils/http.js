import axios from 'axios'
import {
  Message
} from 'element-ui'

axios.defaults.baseURL = 'http://122.152.200.11:8080'

// 超时时间
axios.defaults.timeout = 120000

// 头部
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
axios.interceptors.response.use(
  response => {
    if (response.data.result === '0') {
      return response
    } else {
      Message({
        message: response.data.msg,
        type: 'error'
      })
      return response
    }
  },
  error => {
    const msg = error.response.data.msg
    Message({
      message: msg,
      type: 'error'
    })
    return Promise.reject(error)
  }
)
export default axios
