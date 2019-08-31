import axios from 'axios'
import { Message } from 'element-ui'
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0'

axios.interceptors.request.use(function (config) {
  // 在发起请求请做一些业务处理
  let userInfo = window.localStorage.getItem('user-info')
  let token = userInfo ? JSON.parse(userInfo).token : null
  config.headers.Authorization = `Bearer ${token}`
  return config
}, function (error) {
  // 对请求失败做处理
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  // 对响应数据做处理
  return response.data ? response.data : {}
}, function (error) {
  // 对响应错误做处理
  console.log(arguments)// arguments中有response->status有状态码
  let code = error.response ? error.response.status : ''
  let message = ''
  switch (code) {
    case 400:
      message = '请求参数错误'
      break
    case 403:
      message = '用户非实名认证用户'
      break
    case 507:
      message = '服务器数据库异常'
      break
    case 401:
      message = 'token过期或未传'
      window.localStorage.clear()
      window.location.hash = '#/login'
      break
    default:
      message = '未知错误'
      break
  }
  Message({ message: message, type: 'warning' })
  return Promise.reject(error)
})
export default axios
