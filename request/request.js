import basicGql from './requestConfig'
import Taro from '@tarojs/taro'
const request = async ({ query, variables = {}, isSync = false }) => {
  if (!query) {
    throw 'not find query'
  }
  try {
    const token = await Taro.getStorageSync('token') ?? ''
    let res = basicGql.request({
      query,
      variables,
      header: {
        token,
        "Content-Type": "application/json; charset=utf-8"
        // "wxapp-info": JSON.stringify(systemInfo)
      }
    })
    return res
  } catch (error) {
    return error
  }
}
export default request