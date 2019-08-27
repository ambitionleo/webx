import axios from 'axios'

const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 60000 // 请求超时时间
})

service.interceptors.request.use(config => {
  config.headers.userId = sessionStorage.getItem('userID')
  return config
}, error => {
  Promise.reject(error)
})

/* respone拦截器 */
// service.interceptors.response.use(
//   response => {
//     if (response.data.code === 'OK') {
//         return response
//     } else if (response.data.code === 'ERROR') {
//         console.log(response.data.data)
//         return Promise.reject(response.data)
//     }    
//   },
//   error => {
    
//   }
// )
service.interceptors.response.use(
  response => response,
  error => {
    console.log(error.response)// for debug
    // Vue.$vux.toast.show({
    //   type: 'text',
    //   text: error.response.status === 500 ? '服务异常' : error.response.data
    // })
    return Promise.reject(error)
  }
)

export default service