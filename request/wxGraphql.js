import Taro from '@tarojs/taro'
import request from './request'
const responseHandler = (resolve, reject, res, errorHandler) => {
  const retData = res.data.errors ? res.data.errors[0].message : {
    code: 200
  }
  if (res.statusCode == 200 && retData.code == 200) {
    resolve(res.data)
  } else {
    reject(res)
    if (errorHandler) {
      errorHandler(res.data)
    }
  }
}

const GrqphQL = ({ url, header: requestHeader }, isRequest) => {
  if (!url) {
    throw "请提供GraphQL请求URl"
  }

  isRequest = isRequest || false

  let header = {}

  if (typeof requestHeader === 'function') {
    header = requestHeader()
  }

  if (typeof requestHeader === 'object') {
    header = requestHeader
  }

  if (isRequest) {
    return {
      request: request => {
        const { query, variables = {} } = request
        return new Promise((resolve, reject) => {
          Taro.showLoading({
            title: '正在加载'
          })
          Taro.request({
            url,
            method: 'POST',
            data: variables ? JSON.stringify({
              query,
              variables
            }) : JSON.stringify({ query }),
            header: { ...request.header, ...header },
            complete: (res) => {
              Taro.hideLoading()
              responseHandler(resolve, reject, res, request.errorHandler)
            }
          })

        })
      }
    }
  }
}

export default GrqphQL